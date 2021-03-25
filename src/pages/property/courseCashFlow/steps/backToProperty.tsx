import type React from 'react';
import { Box, Icon, Heading, Button, Flex, Center } from '@chakra-ui/react';
import { BsChevronLeft, BsListTask } from 'react-icons/bs';

export const BackToProperty = ({
  handleClose,
  prevStep,
}: {
  handleClose: React.MouseEventHandler;
  prevStep: React.MouseEventHandler;
}) => {
  return (
    <Box>
      <Icon as={BsChevronLeft} cursor="pointer" onClick={prevStep} />
      <Center pt={20} flexDirection="column">
        <Box h={40} w={40} borderRadius="50%" bg="#d2d2d1" />
        <Heading fontSize="2xl" mb="0">
          Well done!
        </Heading>
        <Heading fontSize="md">Risus nunc lectus neque, suspendisse</Heading>
      </Center>
      <Heading fontSize="sm" mt={16}>
        Complete this crash course:
      </Heading>
      <Flex border="1px" justifyContent="space-between">
        <Box p={4}>
          <Heading fontSize="md" m="0">
            Rookie homeowner
          </Heading>
          <Heading fontSize="sm" m="0">
            3 lessons left
          </Heading>
        </Box>
        <Button borderRadius="0" h="auto" w={16}>
          <Icon h={6} w={6} as={BsListTask} />
        </Button>
      </Flex>

      <Button w="calc(100% - 2rem)" pos="absolute" bottom={6} onClick={handleClose}>
        Go back to property
      </Button>
    </Box>
  );
};
