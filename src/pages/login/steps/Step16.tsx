import { BackBtn } from "../../../components/backBtn";
import { Container } from "../../../components/container";
import { Heading, Button, Input, Text } from "@chakra-ui/react";

export const Step16: React.FC = () => (
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
      What’s your Entity phone number?
    </Heading>
    <Text fontSize="15px" textAlign="left">
      Enter your US phone number{" "}
    </Text>
    <Input placeholder="XXX XXX XXX" h="48px" bg="#F3F3F3" mt="32px" />
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
