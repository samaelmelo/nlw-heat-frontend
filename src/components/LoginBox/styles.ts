import styled from 'styled-components'
import IbannerGirl from "../../assets/banner-girl.png"



export const LoginboxWrapper = styled.div`

  height: 100vh;
  width: 100%;
  background: #17171a url(${IbannerGirl}) no-repeat center top;


  padding: 440px 80px 0;
  text-align:center;

  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;


  strong{
    font-size: 32px;
    line-height: 36px;
  }

  .signInWithGithub{
    background: #ffcd1e;
    margin-top:32px;
    padding: 0 40px;
    height: 56px;
    color: #09090a;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;

    display: flex;
    justify-content:center;
    align-items:center;

    svg{
      margin-right: 16px;
    }

    &:hover{
      filter: brightness(.9);
    }
  }
`
