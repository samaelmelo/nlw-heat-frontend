import { useState, FormEvent } from 'react'
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc'
import { useAuth } from '../../contexts/auth'
import { api } from '../../services/api'
import * as styles from './styles'

export const SendMessageForm = () => {
  const { user, signOut } = useAuth()
  const [message, setMessage] = useState('')

  async function handleSendMessage(event: FormEvent){
    event.preventDefault()

    // mesmo tirando os espaços a message for vazia não faz nada
    if(!message.trim()){
      return
    }

    await api.post('messages', {message})

    setMessage('')
  }



  return (
    <styles.sendMessageFormWrapper>
      <button className="signOutButton" onClick={signOut}>
        <VscSignOut size="32" />
      </button>

      <header className="userInformation">
        <div className="userImage">
          <img src={user?.avatar_url} alt={user?.name} />
        </div>
        <strong className="userName">{user?.name}</strong>
        <span className="userGithub">
          <VscGithubInverted size="16" />
          {user?.name}
        </span>
      </header>

      <form className="sendMessageForm" onSubmit={handleSendMessage}>
        <label htmlFor="message">Mensagem</label>
        <textarea 
            name="message" 
            id="message"
            placeholder="Qual a sua expectativa para o evento?"
            onChange={event => setMessage(event.target.value)}
            value={message}
          />
        <button type="submit">Enviar mensage</button>
      </form>
    </styles.sendMessageFormWrapper>
  )
}
