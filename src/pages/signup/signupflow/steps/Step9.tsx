import React from "react";
import {
  Container,
  ImgButton,
  Option,
  OptionChevron,
  Progress,
  ProgressBar,
  Heading,
} from "../style";
import Chevron from "../../../../assets/chevron.png";

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

const Step9: React.FC<stepProps> = ({ nextStep, prevStep }: stepProps) => {
  return (
    <Container>
      <ImgButton marginBottom onClick={prevStep}>
        <img src={Chevron} alt="backbutton" />
      </ImgButton>
      <ProgressBar>
        <Progress fill="33%" />
      </ProgressBar>
      <Heading>How much is your net worth</Heading>
      <Option onClick={nextStep}>
        $500k or less <OptionChevron src={Chevron} />
      </Option>
      <Option onClick={nextStep}>
        $500k - $1m <OptionChevron src={Chevron} />
      </Option>
      <Option onClick={nextStep}>
        $1m - $3m <OptionChevron src={Chevron} />
      </Option>
      <Option onClick={nextStep}>
        $3m - $5m <OptionChevron src={Chevron} />
      </Option>
      <Option onClick={nextStep}>
        $10m or more <OptionChevron src={Chevron} />
      </Option>
      <Option onClick={nextStep}>
        I prefer not to say <OptionChevron src={Chevron} />
      </Option>
    </Container>
  );
};

export default Step9;
