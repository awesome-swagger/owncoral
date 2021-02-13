import React from "react";
import { Container, ImgButton, Button } from "../style";
import Chevron from "../../../../assets/chevron.png";

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
      <Button onClick={nextStep}>Continue</Button>
    </Container>
  );
};

export default Step3;
