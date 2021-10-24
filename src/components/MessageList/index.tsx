import * as styles from "./styles"
import { api } from "../../services/api"
import io from 'socket.io-client'
import logoImg from "../../assets/logo.svg"
import { useEffect, useState } from "react"

type Message = {
  id: string,
  text: string,
  user: {
    name: string,
    avatar_url: string,
  }
}

const messageQueue: Message[] = []

const socket = io('http://localhost:4000')

socket.on('new_message', (newMessage:Message) => {
  messageQueue.push(newMessage);
})


export function MessageList(){

  const [messages, setMessages ] = useState<Message[]>([])

  useEffect(()=>{
   setInterval( () => {
        if(messageQueue.length > 0){
          setMessages(prevState => [
            messageQueue[0],
            prevState[0],
            prevState[1],
          ].filter(Boolean))


          messageQueue.shift()
        }
    }, 3000)
  },[])


  useEffect(()=>{
    api.get<Message[]>("/messages/last3").then(response => setMessages(response.data)
    )
  },[])


  return(
    <styles.messageListWrapper>
      <img src={logoImg} alt="DoWhile 2021" />

      <ul className='messageList'>
         {messages.map(message => (
            <li key={message.id} className='message'>
              <p className='messageContent'>{message.text}</p>
              <div className='messageUser'>
                <div className='userImage'>
                    <img src={message.user.avatar_url} alt={message.user.name} />
                </div>
                <span>{message.user.name}</span>
              </div>
            </li>
         ))}
      </ul>
    </styles.messageListWrapper>
  )
}