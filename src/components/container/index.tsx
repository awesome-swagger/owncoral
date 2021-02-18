import { Flex, Box } from "@chakra-ui/react";

export const Container: React.FC = ({ children }: any) => (
  <Box p="24px" m="0" w="100%" h="100vh" pos="relative">
    {children}
  </Box>
);

export const FlexContainer: React.FC = ({ children }: any) => {
  console.log();
  return (
    <Flex
      pos="relative"
      p="24px"
      m="0"
      w="100%"
      h="100vh"
      align="center"
      justify="center"
      direction="column"
    >
      {children}
    </Flex>
  );
};
