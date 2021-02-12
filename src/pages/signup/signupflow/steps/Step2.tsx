/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "@emotion/react";
import {
  Container,
  ImgButton,
  Description,
  InputField,
  Button,
} from "../style";
import Chevron from "../../../../assets/chevron.png";

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

const Step2: React.FC<stepProps> = ({ nextStep, prevStep }: stepProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <Container>
      <ImgButton marginBottom onClick={prevStep}>
        <img src={Chevron} alt="backbutton" />
      </ImgButton>
      <h1>What’s your full name?</h1>
      <Description>Lorem ipsum dolor sir</Description>
      <InputField
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <InputField
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <Button onClick={nextStep} disabled={firstName === "" || lastName === ""}>
        Continue
      </Button>
    </Container>
  );
};

export default Step2;
