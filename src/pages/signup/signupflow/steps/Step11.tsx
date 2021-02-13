import React from "react";
import {
  Container,
  Description,
  Button,
  ImgButton,
  AlertBox,
  Heading,
  Avatar,
} from "../style";
import Chevron from "../../../../assets/chevron.png";
import { Link } from "react-router-dom";

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};
const Step11: React.FC<stepProps> = ({ nextStep, prevStep }: stepProps) => {
  return (
    <Container>
      <ImgButton marginBottom onClick={prevStep}>
        <img src={Chevron} alt="backbutton" />
      </ImgButton>
      <AlertBox>
        <Avatar />
        <Heading>Thanks for joining Coral</Heading>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Description>
      </AlertBox>
      <Link to="/">
        <Button>Start</Button>
      </Link>
    </Container>
  );
};
export default Step11;
