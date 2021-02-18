import { useState, useCallback } from "react";
import { BackBtn } from "../../../components/backBtn";
import { Container } from "../../../components/container";
import { Heading, Button, Text } from "@chakra-ui/react";
import DayPicker from "../../../components/daypicker";

export const Step13: React.FC = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = useCallback(
    (newDate) => {
      setDate(newDate);
    },
    [date]
  );
  return (
    <Container>
      <BackBtn />
      <Heading
        as="h1"
        size="md"
        mt="32px"
        mb="8px"
        textAlign="left"
        letterSpacing="normal"
      >
        Which is the date of registration?
      </Heading>
      <Text fontSize="15px" textAlign="left">
        Lorem ipsum dolor sir amet
      </Text>
      <DayPicker onChange={handleDateChange} date={date} />
      <Button
        pos="absolute"
        bottom="42px"
        left="24px"
        w="calc(100% - 48px)"
        h="48px"
        bg="#4E504F"
        color="#fff"
      >
        Continue
      </Button>
    </Container>
  );
};
