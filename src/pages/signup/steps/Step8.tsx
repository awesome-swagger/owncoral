import React, { useState, useCallback } from "react";
import { Box, Button, Heading, Progress, Image } from "@chakra-ui/react";
import Chevron from "../../../assets/chevron.png";

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
    <Box p="24px" m="0" w="100%" h="100vh">
      <Box h="16px" w="16px" cursor="pointer" onClick={() => prevStep()}>
        <Image src={Chevron} />
      </Box>
      <Progress mt="32px" colorScheme="gray" size="sm" value={3} />
      <Heading
        as="h1"
        size="md"
        mt="32px"
        mb="8px"
        textAlign="left"
        letterSpacing="normal"
      >
        Which is your investment goal?
      </Heading>
      {investmentGoalList.map(({ value, label }) => (
        <Box
          px="24px"
          py="12px"
          mt="8px"
          bg="#F3F3F3"
          color="4E504F"
          textAlign="left"
          cursor="pointer"
          key={value}
          onClick={() => handleChangeSelection(value)}
          active={selection.includes(value)}
        >
          {label}
        </Box>
      ))}
      <Button
        pos="absolute"
        bottom="42px"
        left="24px"
        w="calc(100% - 48px)"
        h="48px"
        bg="#4E504F"
        color="#fff"
        onClick={nextStep}
        disabled={!selection.length}
      >
        Continue
      </Button>
    </Box>
  );
};

export default Step8;
