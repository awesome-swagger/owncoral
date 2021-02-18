import { Heading, Box, Text, Button, Flex, Image } from "@chakra-ui/react";
import { FlexContainer } from "../../../components/container";
import { BackBtn } from "../../../components/backBtn";

export const Step1: React.FC = () => {
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
        Some personal information is missing
      </Heading>
      <Text fontSize="15px" m="0 !important" textAlign="center">
        Before making an investing, we need you to provide us some personal
        information.
      </Text>
      <Button
        pos="absolute"
        bottom="106px"
        left="24px"
        w="calc(100% - 48px)"
        h="48px"
        bg="#4E504F"
        color="#fff"
        cursor="pointer"
      >
        Complete information
      </Button>
      <Button
        pos="absolute"
        bottom="42px"
        left="24px"
        w="calc(100% - 48px)"
        h="48px"
        bg="fff"
        color="#4E504F"
        cursor="pointer"
      >
        Skip for now
      </Button>
    </FlexContainer>
  );
};
