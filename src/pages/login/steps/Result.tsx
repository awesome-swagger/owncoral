import { Heading, Box, Text, Button, Flex, Image } from "@chakra-ui/react";
import { FlexContainer } from "../../../components/container";
import { BackBtn } from "../../../components/backBtn";

export const Result: React.FC = () => {
  return (
    <FlexContainer>
      <BackBtn pos="absolute" />
      <Box h="160px" w="160px" borderRadius="50%" bg="#d2d2d1" />
      <Heading
        as="h1"
        size="md"
        mt="32px"
        letterSpacing="normal"
        textAlign="center"
      >
        Congratulations! Your profile is now complete{" "}
      </Heading>
      <Text fontSize="15px" m="0 !important" textAlign="center">
        You are ready to start investing in Coral.
      </Text>
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
        Continue watching properties
      </Button>
    </FlexContainer>
  );
};
