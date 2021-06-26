import type { MouseEventHandler } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { Box, Button, Center, Flex, Icon, Image, Text } from '@chakra-ui/react';

import Academy from '../../../../../assets/academy-1.svg';
import Frame from '../../../../../assets/Frame615.png';
import { Title2 } from '../../../../../components/text';

export const BackToProperty = ({
  handleClose,
  prevStep,
}: {
  handleClose: MouseEventHandler;
  prevStep: MouseEventHandler;
}) => {
  const history = useHistory();

  return (
    <Box pb={40}>
      <Icon as={FiChevronLeft} cursor="pointer" onClick={prevStep} />
      <Center pt={20} flexDirection="column">
        <Image src={Frame} alt="frame" />
        <Title2 textAlign="center">Well done! Investor Cash Flow lesson completed!</Title2>
      </Center>

      <Box w="calc(100% - 2rem)" pos="absolute" bottom={6}>
        {/*
        <Text textStyle="Body1" textAlign="center" my={4}>
          Continue to next lesson
        </Text>
        */}
        <Flex
          justifyContent="space-between"
          alignItems="center"
          layerStyle="selectionBox"
          borderRadius="2xl"
          overflow="hidden"
        >
          <Box
            p={4}
            cursor="pointer"
            onClick={() => history.push('/academy/course/understanding-coral-listings')}
          >
            <Text textStyle="Body1" fontWeight="600" my={2}>
              Understanding Coral listings
            </Text>

            <Text textStyle="Body2">Crash course</Text>
          </Box>
          <Icon as={Academy} h="auto" w="auto" />
        </Flex>
        {/*
        <Button mt={4} w="100%" onClick={handleClose}>
          Go back to property
        </Button>
        */}
      </Box>
    </Box>
  );
};
