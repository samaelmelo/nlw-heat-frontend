import {VscGithubInverted} from "react-icons/vsc"
import { useAuth } from "../../contexts/auth";
import * as styles from "./styles"

export const LoginBox = () => {
  const {signInUrl} = useAuth()

  return (
   <styles.LoginboxWrapper>
      <strong>Entre e compartilhe sua mensagem</strong>
      <a href={signInUrl} className="signInWithGithub">
        <VscGithubInverted size='24' />
        entrar com github 
      </a>

   </styles.LoginboxWrapper>
  );
};
