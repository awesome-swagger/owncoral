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
  margin-right: 33px;
  margin-bottom: 20px;
  padding-right: 33px;
  box-sizing: border-box;
  position: relative;
  border-radius: 99px;
  border: 1px solid rgba(180, 180, 180, 0.8);

  &:focus-within {
    border: 1px solid darkgray;
    outline: none;
  }

  input {
    border-radius: inherit;
    border: none;
    width: 100%;
    padding: 15px 15px 15px 45px;
    box-sizing: border-box;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: lightsteelblue;
    }
  }
`;

export const Icon = styled.div`
  position: absolute;
  left: 16px;
  top: 13px;
`;

export const SignupBtn = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  width: 80%;

  input {
    cursor: pointer;
    background-color: rgb(70, 170, 60);
    color: white;
    padding: 15px;
    border-radius: 999px;
    width: 100%;
    height: 100%;
    border: 0;
    font-size: 120%;
    outline: none;
  }
`;
