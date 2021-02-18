import { Heading, Input, Text, Button } from "@chakra-ui/react";
import { Container } from "../../../components/container";
import { BackBtn } from "../../../components/backBtn";

export const Step2: React.FC = () => {
  return (
    <Container>
      <BackBtn />
      <Heading as="h1" size="md" mt="32px" letterSpacing="normal">
        What’s your residential address?
      </Heading>
      <Text fontSize="15px" m="0 !important">
        Lorem ipsum dolor sir amet
      </Text>
      <Input placeholder="Residental Address" h="48px" bg="#F3F3F3" mt="32px" />
      <Button
        pos="absolute"
        bottom="42px"
        left="24px"
        w="calc(100% - 48px)"
        h="48px"
        bg="#4E504F"
        color="#fff"
        cursor="pointer"
      >
        Continue
      </Button>
    </Container>
  );
};
