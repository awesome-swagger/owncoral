/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/react";
import {
  Container,
  ImgButton,
  Button,
  Button1,
  PopUpText,
  Description,
} from "../style";
import Chevron from "../../../../assets/chevron.png";

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

const Step4: React.FC<stepProps> = ({ nextStep, prevStep }: stepProps) => {
  return (
    <Container>
      <ImgButton marginBottom onClick={prevStep}>
        <img src={Chevron} alt="backbutton" />
      </ImgButton>
      <h1>Are you an accredited investor?</h1>
      <Description>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit.
      </Description>
      <PopUpText>Amet minim mollit non deserunt ullamco est.</PopUpText>
      <Button gap onClick={nextStep}>
        Yes
      </Button>
      <Button1>No</Button1>
    </Container>
  );
};

export default Step4;
