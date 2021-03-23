import { Box, Icon, Progress, Heading, Button, Center } from '@chakra-ui/react';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { RealizedAppreciationChart } from '../charts';

export const Step4 = ({
  nextStep,
  prevStep,
}: {
  nextStep: React.MouseEventHandler;
  prevStep: React.MouseEventHandler;
}) => {
  return (
    <Box>
      <Icon as={BsChevronLeft} cursor="pointer" onClick={prevStep} />
      <Progress value={50} my={6} colorScheme="primary" borderRadius="full" size="sm" />
      <Heading fontSize="sm" m="0">
        Understanding investor Cash Flow
      </Heading>
      <Heading fontSize="2xl">Realized Appreciation</Heading>
      <Heading fontSize="md">
        The second way you can make money on Coral real estate is through the appreciation of the
        property itself.
      </Heading>
      <Heading fontSize="sm">
        This (of course) happens with the sale of the property, but also through refinancing or
        construction earn-outs. We ask our lender to recognize the increased property value, and
        increase our loan balance accordingly. The incremental loan amount is then distributed to
        investors.
      </Heading>
      <Center w="100%" h="150px">
        <RealizedAppreciationChart />
      </Center>
      <Heading fontSize="xs" textAlign="right" mt={0} mb={6}>
        An example of lorem ipsum dolor
      </Heading>
      <Heading fontSize="sm">
        We typically get a construction earn-out after a meaningful renovation, and refinance every
        ~5 years. These events, along with the sale of the property, create "spikes" in cash flow
        (layered on top of the cash flow from rental revenue).
      </Heading>
      <Button w={10} h={10} pos="absolute" bottom={6} right={4} onClick={nextStep}>
        <Icon as={BsChevronRight} />
      </Button>
    </Box>
  );
};
