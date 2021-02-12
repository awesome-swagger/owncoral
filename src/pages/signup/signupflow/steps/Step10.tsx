/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/react";
import {
  Container,
  ImgButton,
  Option,
  OptionChevron,
  Heading,
  Progress,
  ProgressBar,
} from "../style";
import Chevron from "../../../../assets/chevron.png";

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

const Step10: React.FC<stepProps> = ({ nextStep, prevStep }: stepProps) => {
  return (
    <Container>
      <ImgButton marginBottom onClick={prevStep}>
        <img src={Chevron} alt="backbutton" />
      </ImgButton>
      <ProgressBar>
        <Progress fill="66%" />
      </ProgressBar>
      <Heading>How much investment experience do you have?</Heading>
      <Option onClick={nextStep}>
        Lorem ipsum
        <OptionChevron src={Chevron} />
      </Option>
      <Option onClick={nextStep}>
        Lorem ipsum
        <OptionChevron src={Chevron} />
      </Option>
      <Option onClick={nextStep}>
        Lorem ipsum
        <OptionChevron src={Chevron} />
      </Option>
      <Option onClick={nextStep}>
        Lorem ipsum <OptionChevron src={Chevron} />
      </Option>
    </Container>
  );
};
export default Step10;
