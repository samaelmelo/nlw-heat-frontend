import styled from "styled-components";
import ImageBackground from "./assets/background.svg";

type UserProps = {
  contentSigned: boolean;
}


export const contentWrapper = styled.main<UserProps>`
  max-width: 1080px;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 453px;
  column-gap: 120px;
  position: relative;
  /* overflow-x: hidden; */

  &::before{

    visibility: ${props => (props.contentSigned ? 'visible' : 'hidden' )};
    content: '';
    height: 100vh;
    width: 420px;
    background: url(${ImageBackground}) no-repeat;
    background-size: cover;
    position: absolute;
    right: -200px;
    top: 0;
    /* overflow-x:hidden;  */

  }

`