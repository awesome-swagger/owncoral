/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/react";
import { Container, ImgButton, Button } from "../style";
import Chevron from "../../../../assets/chevron.png";
import DayPicker from "../../../../components/daypicker";

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

const Step3: React.FC<stepProps> = ({ nextStep, prevStep }: stepProps) => {
  return (
    <Container>
      <ImgButton marginBottom onClick={prevStep}>
        <img src={Chevron} alt="backbutton" />
      </ImgButton>
      <h1>When is your Birthday?</h1>
      <DayPicker />
      <Button onClick={nextStep}>Continue</Button>
    </Container>
  );
};

export default Step3;
