/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useCallback } from "react";
import { css, jsx } from "@emotion/react";
import {
  Container,
  Description,
  InputLabel,
  InputName,
  InputField,
  Button,
} from "./style";

type UserNameProps = {
  onProceed: Function;
};
const UserName: React.FC<UserNameProps> = ({ onProceed }) => {
  const [name, setName] = useState<string>("");
  const handleChange = useCallback(({ target: { value: inputValue } }) => {
    setName(inputValue);
  }, []);
  return (
    <Container>
      <h1>What's your name?</h1>
      <Description>This will be what shows on your profile</Description>
      <InputLabel>
        <InputName>YOUR NAME</InputName>
        <InputField value={name} onChange={handleChange} type="text" />
      </InputLabel>
      <h1
        css={css`
          margin-top: 50px;
        `}
      >
        Choose a username
      </h1>
      <Description>This will be your public handle</Description>
      <Button
        disabled={!name}
        onClick={() => onProceed((prevStep: number) => prevStep + 1)}
      >
        Next
      </Button>
    </Container>
  );
};

export default UserName;
