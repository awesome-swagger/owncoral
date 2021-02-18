import { BackBtn } from "../../../components/backBtn";
import { Container } from "../../../components/container";
import { Heading, Button, Box, Text } from "@chakra-ui/react";

export const Step14: React.FC = () => {
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
        Certificate of registration
      </Heading>
      <Text fontSize="15px" textAlign="left" mb="32px">
        Lorem ipsum dolor sir amet
      </Text>
      <Box border="2px dashed #D2D2D1" p="14px">
        <Text fontSize="15px" textAlign="center" color="#4E504F">
          Upload Certificate of registration file
        </Text>
        <Text fontSize="13px" textAlign="center" color="#888">
          JPG, PNG or PDF
        </Text>
      </Box>
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
