import React from "react";
import {
  Container,
  ImgButton,
  Description,
  Avatar,
  Button,
  AlertBox,
  Heading,
} from "../style";
import Chevron from "../../../../assets/chevron.png";

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

const Step7: React.FC<stepProps> = ({ nextStep, prevStep }: stepProps) => {
  return (
    <Container>
      <ImgButton marginBottom onClick={prevStep}>
        <img src={Chevron} alt="backbutton" />
      </ImgButton>
      <AlertBox>
        <Avatar />
        <Heading>Welcome to Coral, John Doe!</Heading>
        <Description>
          On the following screens, we are going to ask you a few questions to
          get you better. There are no good/bad answers.
        </Description>
      </AlertBox>
      <Button onClick={nextStep}>Continue</Button>
    </Container>
  );
};

export default Step7;
