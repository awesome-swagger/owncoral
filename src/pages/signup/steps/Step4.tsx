import { Box, Text, Heading, Button, Image } from "@chakra-ui/react";
import { useCallback, useContext } from "react";
import Chevron from "../../../assets/chevron.png";
import { StepFormContext } from "../../signup";

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

const Step4: React.FC<stepProps> = ({ nextStep, prevStep }: stepProps) => {
  const form = useContext(StepFormContext);

  const handleSubmit = useCallback(() => {
    form.dispatch({ type: "update-form", payload: { step4: "yes" } });
    nextStep();
  }, []);
  return (
    <Box p="24px" m="0" w="100%" h="100vh" pos="relative">
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
        Are you an accredited investor?
      </Heading>
      <Text fontSize="15px" textAlign="left" m="0 !important">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit.
      </Text>
      <Text fontSize="13px" color="#888" textAlign="left" m="0 !important">
        Amet minim mollit non deserunt ullamco est.
      </Text>
      <Button
        pos="absolute"
        bottom="106px"
        left="24px"
        w="calc(100% - 48px)"
        h="48px"
        bg="#4E504F"
        color="#FFF"
        onClick={handleSubmit}
      >
        Yes
      </Button>
      <Button
        pos="absolute"
        bottom="42px"
        left="24px"
        w="calc(100% - 48px)"
        h="48px"
        bg="#FFF"
        color="#4E504F"
      >
        No
      </Button>
    </Box>
  );
};

export default Step4;
