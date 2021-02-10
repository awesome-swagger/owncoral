/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useCallback } from "react";
import { jsx } from "@emotion/react";
import {
  Container,
  InputField,
  InputLabel,
  InputName,
  Button,
  Description,
} from "./style";

type NameProps = {
  onProceed: Function;
};
const Name: React.FC<NameProps> = ({ onProceed }) => {
  const [state, setState] = useState({ firstName: "", lastName: "" });

  const handleChange = useCallback(
    ({ target: { value: inputValue, name: inputName } }) => {
      setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
    },
    []
  );
  return (
    <Container>
      <h1>What's your full legal name?</h1>
      <Description>
        This is usally the name on your driver's license.
      </Description>

      <InputLabel>
        <InputName>FIRST NAME</InputName>
        <InputField
          name="firstName"
          value={state.firstName}
          onChange={handleChange}
          type="text"
        />
      </InputLabel>
      <InputLabel>
        <InputName>LAST NAME</InputName>
        <InputField
          name="lastName"
          value={state.lastName}
          onChange={handleChange}
          type="text"
        />
      </InputLabel>
      <Button
        disabled={!state.firstName || !state.lastName}
        onClick={() => onProceed((prevStep: number) => prevStep + 1)}
      >
        Next
      </Button>
    </Container>
  );
};

export default Name;
