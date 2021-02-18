import { Heading, Box, Text, Image } from "@chakra-ui/react";
import { Container } from "../../../components/container";
import { BackBtn } from "../../../components/backBtn";
import Chevron from "../../../assets/chevron.png";

const EntityType = [
  {
    value: "Partnership",
  },
  { value: "S Coporation" },
  { value: "C Corporation" },
];
export const Step8: React.FC = () => {
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
        Which type of Tax Clasification?
      </Heading>
      <Text fontSize="15px" textAlign="left" mb="32px">
        Lorem ipsum dolor sir amet
      </Text>
      {EntityType.map(({ value }) => (
        <Box
          px="24px"
          py="12px"
          mt="8px"
          bg="#F3F3F3"
          color="4E504F"
          textAlign="left"
          cursor="pointer"
          pos="relative"
        >
          {value}
          <Image
            pos="absolute"
            top="50%"
            right="16px"
            transform="translateY(-50%) rotate(180deg)"
            src={Chevron}
          />
        </Box>
      ))}
    </Container>
  );
};
