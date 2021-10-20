import {VscGithubInverted} from "react-icons/vsc"

import * as styles from "./styles"


export const LoginBox = () => {
  return (
   <styles.LoginboxWrapper>
      <strong>Entre e compartilhe sua mensagem</strong>

      
    
      <a href="#" className="signInWithGithub">
        <VscGithubInverted size='24' />
        entrar com github 
      </a>

   </styles.LoginboxWrapper>
  );
};
