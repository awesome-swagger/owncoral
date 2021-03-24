import { Box, Icon, Progress, Heading, Button, Center, Flex } from '@chakra-ui/react';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { TotalReturnChart } from '../charts';

export const Step7 = ({
  nextStep,
  prevStep,
}: {
  nextStep: React.MouseEventHandler;
  prevStep: React.MouseEventHandler;
}) => {
  return (
    <Box>
      <Icon as={BsChevronLeft} cursor="pointer" onClick={prevStep} />
      <Progress value={87} my={6} colorScheme="primary" borderRadius="full" size="sm" />
      <Heading fontSize="sm" m="0">
        Understanding investor Cash Flow
      </Heading>
      <Heading fontSize="2xl">Total Return</Heading>
      <Heading fontSize="md">
        The total return shows you what’s taxable, and at what rate. Capital gains tax is a much
        lower rate than income tax -
      </Heading>
      <Heading fontSize="sm">
        The expenses and depreciation of the building are tax write-offs that offset the rental
        revenue of the property. This means that you'll likely pay very little (if any) income tax
        on your cash flow.
      </Heading>
      <Heading fontSize="sm">
        The expenses and depreciation of the building are tax write-offs that offset the rental
        revenue of the property. This means that you'll likely pay very little (if any) income tax
        on your cash flow.
      </Heading>
      <Box textAlign="center">
        <Heading fontSize="md" fontWeight="bold" m="0">
          $3k
        </Heading>
        <Heading fontSize="xs" m="0">
          TAXABLE INCOME
        </Heading>
      </Box>
      <Center w="100%" h="150px" transform="rotate(-85deg)">
        <Heading pos="absolute" transform="rotate(85deg)" fontSize="2xl" fontWeight="bold">
          $181
        </Heading>
        <TotalReturnChart />
      </Center>
      <Flex justifyContent="space-between" pos="relative" top="-65px" px={4}>
        <Box textAlign="center">
          <Heading fontSize="md" fontWeight="bold" m="0">
            $78k
          </Heading>
          <Heading fontSize="xs" m="0">
            CAPITAL
            <br /> GAINS
          </Heading>
        </Box>
        <Box textAlign="center" pt={4}>
          <Heading fontSize="md" fontWeight="bold" m="0">
            $10k
          </Heading>
          <Heading fontSize="xs" m="0">
            RETURN
            <br /> OF CAPITAL
          </Heading>
        </Box>
      </Flex>
      <Button w={10} h={10} pos="absolute" bottom={6} right={4} onClick={nextStep}>
        <Icon as={BsChevronRight} />
      </Button>
    </Box>
  );
};
