/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "@emotion/react";
import { Container, Button, OptionWrapper, OptionBox } from "./style";

const expOptions = [
  { value: 0, label: "None" },
  { value: 1, label: "A little bit" },
  { value: 2, label: "I know what I'm doing" },
  { value: 3, label: "I'm an expert" },
];

const InvestingExperience = ({ onProceed }) => {
  const [selected, setSelected] = useState<undefined | number>();

  return (
    <Container>
      <h1>How much investing experience do you have?</h1>
      <OptionWrapper>
        {expOptions.map(({ value, label }) => (
          <OptionBox
            key={value}
            onClick={() => setSelected(value)}
            active={value === selected}
          >
            {label}
          </OptionBox>
        ))}
      </OptionWrapper>

      <Button
        disabled={typeof selected !== "number"}
        onClick={() => onProceed((prevStep) => prevStep + 1)}
      >
        Next
      </Button>
    </Container>
  );
};
export default InvestingExperience;
