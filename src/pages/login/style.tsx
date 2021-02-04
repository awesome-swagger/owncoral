/** @jsxRuntime classic */
/** @jsx jsx */
import styled from '@emotion/styled';

export const Card = styled.div`
  width: 380px;
  border-radius: 20px;
  padding: 50px 50px;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.05);
`;

export const CardTitle = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  width: 100%;
  text-align: center;
  font-size: 145%;
  font-weight: 600;
`;

export const InputLine = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  position: relative;
  input {
    border-radius: 99px;
    border: 1px solid rgba(180, 180, 180, 0.8);
    width: 100%;
    padding: 15px 15px 15px 45px;
    box-sizing: border-box;
    &:focus {
      border: 1px solid darkgray;
      outline: none;
    }
    &::placeholder {
      color: lightsteelblue;
    }
    &:invalid {
      background-color: rgb(250, 235, 200);
    }
  }
`;

export const Icon = styled.div`
  position: absolute;
  left: 16px;
  top: 16px;
`;

export const LoginBtn = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  width: 80%;

  input {
    background-color: rgb(70, 170, 60);
    color: white;
    padding: 15px;
    border-radius: 999px;
    width: 100%;
    height: 100%;
    border: 0;
    font-size: 120%;
  }
`;
