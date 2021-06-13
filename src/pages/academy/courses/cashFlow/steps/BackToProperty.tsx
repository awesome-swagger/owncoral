import type React from 'react';
import { Box, Icon, Button, Flex, Center, Image, Text } from '@chakra-ui/react';
import { BsChevronLeft } from 'react-icons/bs';

import { Title2 } from '../../../../../components/text';
import Academy from '../../../../../assets/academy-1.svg';
import Frame from '../../../../../assets/Frame615.png';

export const BackToProperty = ({
  handleClose,
  prevStep,
}: {
  handleClose: React.MouseEventHandler;
  prevStep: React.MouseEventHandler;
}) => (
  <Box pb={40}>
    <Icon as={BsChevronLeft} cursor="pointer" onClick={prevStep} />
    <Center pt={20} flexDirection="column">
      <Image src={Frame} alt="frame" />
      <Title2 textAlign="center">Well done! Investor Cash Flow lesson completed!</Title2>
    </Center>

    <Box w="calc(100% - 2rem)" pos="absolute" bottom={6}>
      <Text textStyle="Body1" textAlign="center" my={4}>
        Continue to next lesson
      </Text>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        layerStyle="selectionBox"
        borderRadius="2xl"
        overflow="hidden"
      >
        <Box p={4}>
          {/* <Text textStyle="Body1" fontWeight="600">
            Equity and Debt
          </Text> */}
          <Text textStyle="Body2">Crash course</Text>
        </Box>
        <Icon as={Academy} h="auto" w="auto" />
      </Flex>
      <Button mt={4} w="100%" onClick={handleClose}>
        Go back to property
      </Button>
    </Box>
  </Box>
);
