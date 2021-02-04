/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from "react";
import { css, jsx } from "@emotion/react";
import { Mail, Lock, Eye, EyeOff } from "react-feather";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import * as Styled from "./style";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    window.location.href="/portfolio";
  }
  window.location.href="/portfolio";
  return (
    <form onSubmit={onSubmit}>
      <Styled.Card>
        <Styled.CardTitle>
          <Logo
            css={css`
              height: 50px;
              margin: 10px;
              fill: var(--main-color);
            `}
          />
          <div>Log in to Franklin</div>
        </Styled.CardTitle>
        <Styled.InputLine>
          <Styled.Icon>
            <Mail size={20} stroke="gray" fill="none"/>
          </Styled.Icon>
          <input 
            placeholder="Email" required
            pattern="(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|&quot;(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*&quot;)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])"
          />          
        </Styled.InputLine>
        <Styled.InputLine>
          <Styled.Icon>
            <Lock size={20} stroke="gray" fill="none"/>
          </Styled.Icon>
          <input type={showPassword ? "text" : "password"} placeholder="Password" required />
          <div 
            css={{position: "absolute", right: "20px", top: "14px"}}
            onClick={()=>{setShowPassword(!showPassword)}}
          >
            { showPassword ? <Eye size={20} stroke="gray" fill="none"/> : <EyeOff  size={20} stroke="gray" fill="none"/> }
          </div>
        </Styled.InputLine>
        <Styled.LoginBtn>
          <input type='submit' value='Log In' />
        </Styled.LoginBtn>
      </Styled.Card>
    </form>
  );
}

export default Login;
