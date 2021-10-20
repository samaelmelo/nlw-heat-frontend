import * as styles from "./App"
import { LoginBox } from "./components/LoginBox";
import { MessageList } from "./components/MessageList";


export default function App() {
  return (
    <styles.contentWrapper>
      <MessageList/>
      <LoginBox/>
    </styles.contentWrapper>
  );
}

