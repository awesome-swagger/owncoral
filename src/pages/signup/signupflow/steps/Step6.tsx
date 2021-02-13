import React from "react";
import {
  Container,
  ImgButton,
  Description,
  Avatar,
  Heading,
  BottomText,
  ReSendButton,
  AlertBox,
} from "../style";
import Chevron from "../../../../assets/chevron.png";

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

const Step6: React.FC<stepProps> = ({ nextStep, prevStep }: stepProps) => {
  return (
    <Container>
      <ImgButton marginBottom onClick={prevStep}>
        <img src={Chevron} alt="backbutton" />
      </ImgButton>
      <AlertBox>
        <Avatar />
        <Heading>Please verify your email address</Heading>
        <Description>
          An email has been sent to <b>johndoe@gmail.com</b>. Please follow the
          instructions in the verification email to finish creating your Coral
          account.
        </Description>
      </AlertBox>
      <BottomText>Didn’t receive an email?</BottomText>
      <ReSendButton onClick={nextStep}>Resend verification email</ReSendButton>
    </Container>
  );
};

export default Step6;
