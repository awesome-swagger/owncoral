/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "@emotion/react";
import { Container, Description, RadioLabel, Button, RadioName } from "./style";

const radioOptions = [
  {
    value: 0,
    label: "100% shareholder on senior executive at a publicly traded company",
  },
  { value: 1, label: "Employed my another brokerage" },
  { value: 2, label: "A politicaly exposed person" },
];

type MemberProps = {
  onProceed: Function;
};
const Member: React.FC<MemberProps> = ({ onProceed }) => {
  const [selected, setSelected] = useState<undefined | number>();

  return (
    <Container>
      <h1>These usually don't apply, but let us know if they do to you</h1>
      <Description>Are you or a family member...</Description>
      {radioOptions.map(({ value, label }) => (
        <RadioLabel key={value} htmlFor={label}>
          <input
            onChange={() => setSelected(value)}
            type="radio"
            id={label}
            checked={value === selected}
            value={value}
            name="member"
          />
          <RadioName>{label}</RadioName>
        </RadioLabel>
      ))}
      <Button onClick={() => onProceed((prevStep: number) => prevStep + 1)}>
        None Apply
      </Button>
    </Container>
  );
};
export default Member;
