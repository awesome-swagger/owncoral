import { useState, useContext, useCallback, useEffect } from "react";
import { Box, Heading, Button, Image } from "@chakra-ui/react";
import { StepFormContext } from "../";
import Chevron from "../../../assets/chevron.png";
import DayPicker from "../../../components/daypicker";
import { Container } from "../../../components/container";

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const Step3: React.FC<stepProps> = ({
  nextStep,
  prevStep,
}: stepProps) => {
  const [date, setDate] = useState(new Date());
  const form = useContext(StepFormContext);

  const handleDateChange = useCallback(
    (newDate) => {
      setDate(newDate);
    },
    [date]
  );
  const onSubmit = useCallback(() => {
    form.dispatch({ type: "update-form", payload: { step3: date } });
    nextStep();
  }, [date]);

  useEffect(() => {
    const formState = form.formState;

    setDate(formState?.step3 || new Date());
  }, []);

  return (
    <Container>
      <Box h="16px" w="16px" cursor="pointer" onClick={() => prevStep()}>
        <Image src={Chevron} />
      </Box>
      <Heading
        as="h1"
        size="md"
        mt="32px"
        mb="8px"
        textAlign="left"
        letterSpacing="normal"
      >
        When is your Birthday?
      </Heading>
      <DayPicker onChange={handleDateChange} date={date} />
      <Button
        pos="absolute"
        bottom="42px"
        left="24px"
        w="calc(100% - 48px)"
        h="48px"
        bg="#4E504F"
        color="#fff"
        onClick={onSubmit}
      >
        Continue
      </Button>
    </Container>
  );
};
