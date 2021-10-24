import * as styles from './Main'
import { LoginBox } from './components/LoginBox'
import { MessageList } from './components/MessageList'
import { useAuth } from './contexts/auth'
import { SendMessageForm } from './components/SendMessageForm'

export default function App() {
  const { user, contentSigned } = useAuth()

  return (
    // !!user ?styles.contentSigned: ''
    <styles.contentWrapper contentSigned={contentSigned}>
      <MessageList />
      {!!user ? <SendMessageForm /> : <LoginBox />}
    </styles.contentWrapper>
  )
}
