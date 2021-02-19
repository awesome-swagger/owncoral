import { Flex, Box } from "@chakra-ui/react";

export const Container: React.FC = ({ children }: any) => (
  <Box p="24px" m="0 auto" w="100%" h="100vh" maxW="600px" pos="relative">
    {children}
  </Box>
);

export const FlexContainer: React.FC = ({ children }: any) => {
  console.log();
  return (
    <Flex
      pos="relative"
      p="24px"
      m="0 auto"
      w="100%"
      h="100vh"
      align="center"
      justify="center"
      direction="column"
      maxW="600px"
    >
      {children}
    </Flex>
  );
};
