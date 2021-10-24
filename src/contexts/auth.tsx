import { createContext,ReactNode,useContext, useEffect, useState } from "react";
import {api} from '../services/api'


type User = {
  id: string;
  name: string;
  login: string;
  avatar_url: string;
}

type AuthContextData = {
  user: User | null
  signInUrl: string
  signOut: () => void;
  contentSigned: boolean;
}


type AuthProviderProps ={
  children: ReactNode;
}

type AuthResponse = {
  token: string;
  user: {
    id: string;
    avatar_url: string;
    name: string;
    login: string;
  }
}



export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider ({children}: AuthProviderProps){
  const [ user, setUser] = useState<User | null>(null)

  const [contentSigned, setContentSigned] = useState(false)


  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=1984c29ec19f3203b9dc`

  async  function signIn(githubCode: string){
    const response = await api.post<AuthResponse>('authenticate', {
      code: githubCode
    })

    const {token, user} = response.data

    localStorage.setItem('@dowhile:token',token)

    api.defaults.headers.common.authorization = `Bearer ${token}`


   setUser(user);
   setContentSigned(true)
    
  }

  function signOut(){
    setUser(null)
    localStorage.removeItem('@dowhile:token')
  }

  // buscar dentro do localstorage o meu token
  useEffect(()=>{ 
    const token = localStorage.getItem('@dowhile:token')
    
    if(token){
      // passando o token para o headers do axios como autorização
      api.defaults.headers.common.authorization = `Bearer ${token}`

      api.get<User>('profile').then(response => {
        setUser(response.data)
      })

      setContentSigned(true)

    }


  }, [])

  useEffect(()=>{
    const url = window.location.href
    const hasGithubCode = url.includes("?code=")
    if(hasGithubCode){
      // split nete caso está cortado a string e duas partes
      // 1ª antes do ?code=
      // 2ª depois do ?code=
      const [urlWithoutCode, githubCode] = url.split('?code=')
      

      // limpar a url para o usurio não ver o codigo
      window.history.pushState({}, '', urlWithoutCode)


      signIn(githubCode)
      // setContentSigned(true)

    }
  },[])

  
  
  return(
    <AuthContext.Provider value={{signInUrl,user, signOut , contentSigned}}>
       {children}
    </AuthContext.Provider>
  )
}


export function useAuth (){
  const context = useContext(AuthContext)

  const {signInUrl, user, signOut, contentSigned} = context
  
  return {signInUrl, user, signOut, contentSigned}

}