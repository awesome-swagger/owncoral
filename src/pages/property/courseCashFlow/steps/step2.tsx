import { Box, Icon, Progress, Heading, Button, Flex } from '@chakra-ui/react';
import { BsChevronRight, BsChevronLeft, BsGraphUp } from 'react-icons/bs';
import { HiOutlineCash } from 'react-icons/hi';

export const Step2 = ({
  nextStep,
  prevStep,
}: {
  nextStep: React.MouseEventHandler;
  prevStep: React.MouseEventHandler;
}) => {
  return (
    <Box>
      <Icon as={BsChevronLeft} cursor="pointer" onClick={prevStep} />
      <Progress value={25} my={6} colorScheme="primary" borderRadius="full" size="sm" />
      <Heading fontSize="sm" m="0">
        Understanding investor Cash Flow
      </Heading>
      <Heading fontSize="2xl">Where does the cash flow come from?</Heading>
      <Heading fontSize="md">The cash flow is derived from these sources:</Heading>
      <Flex mb={4}>
        <Box>
          <Icon h={6} w={6} as={HiOutlineCash} />
        </Box>
        <Box ml={4}>
          <Heading fontSize="md" m="0">
            Rental Revenue
          </Heading>
          <Heading fontSize="sm">tenants pay rent</Heading>
        </Box>
      </Flex>
      <Flex mb={4}>
        <Box>
          <Icon h={6} w={6} as={BsGraphUp} />
        </Box>
        <Box ml={4}>
          <Heading fontSize="md" m="0">
            Realized Appreciation
          </Heading>
          <Heading fontSize="sm">
            The property increases in value, and we choose to return cash to investors through a
            higher loan balance.
          </Heading>
        </Box>
      </Flex>
      <Box layerStyle="selectionBox" p={4}>
        <Heading fontSize="sm" m="0">
          Note: at the sale of the property, you'll also receive (as a part of your cash flow) any
          unused cash that had been reserved to cover specific cash outflows, such as maintenance
          and repair.
        </Heading>
      </Box>
      <Button w={10} h={10} pos="absolute" bottom={6} right={4} onClick={nextStep}>
        <Icon as={BsChevronRight} />
      </Button>
    </Box>
  );
};
