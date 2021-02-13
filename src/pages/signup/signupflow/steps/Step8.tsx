import React, { useState, useCallback } from "react";
import {
  Container,
  ImgButton,
  Option,
  ProgressBar,
  Progress,
  Button,
  Heading,
} from "../style";
import Chevron from "../../../../assets/chevron.png";

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};
type investementGoal = {
  value: number;
  label: string;
};

const investmentGoalList: investementGoal[] = [
  { value: 0, label: "Lorem Ipsum" },
  { value: 1, label: "Lorem Ipsum" },
  { value: 2, label: "Lorem Ipsum" },
  { value: 3, label: "Lorem Ipsum" },
];

const Step8: React.FC<stepProps> = ({ nextStep, prevStep }: stepProps) => {
  const [selection, setSelection] = useState<number[]>([]);

  const handleChangeSelection = useCallback(
    (selectedValue: number) => {
      if (
        typeof selection.find((item) => item === selectedValue) !== "undefined"
      ) {
        setSelection((prevSelection) =>
          prevSelection.filter((x) => x !== selectedValue)
        );
      } else {
        setSelection([...selection, selectedValue]);
      }
    },
    [selection]
  );
  return (
    <Container>
      <ImgButton marginBottom onClick={prevStep}>
        <img src={Chevron} alt="backbutton" />
      </ImgButton>
      <ProgressBar>
        <Progress fill="1%" />
      </ProgressBar>
      <Heading>Which is your investment goal?</Heading>
      {investmentGoalList.map(({ value, label }) => (
        <Option
          key={value}
          onClick={() => handleChangeSelection(value)}
          active={selection.includes(value)}
        >
          {label}
        </Option>
      ))}
      <Button onClick={nextStep} disabled={!selection.length}>
        Continue
      </Button>
    </Container>
  );
};

export default Step8;
