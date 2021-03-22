import { Box, Icon, Progress, Heading, Button } from '@chakra-ui/react';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';

export const Step3 = ({
  nextStep,
  prevStep,
}: {
  nextStep: React.MouseEventHandler;
  prevStep: React.MouseEventHandler;
}) => {
  return (
    <Box>
      <Icon as={BsChevronLeft} cursor="pointer" onClick={prevStep} />
      <Progress value={37} my={6} colorScheme="primary" borderRadius="full" size="sm" />
      <Heading fontSize="sm" m="0">
        Understanding investor Cash Flow
      </Heading>
      <Heading fontSize="2xl">Rental revenue</Heading>
      <Heading fontSize="md">
        Rental revenue is the first way to make money with Coral properties. Rent is collected from
        tenants, and expenses are paid. What remains is the profit.
      </Heading>
      <Heading fontSize="sm">
        Cash flow derived from rental revenue typically looks pretty smooth for Coral properties,
        growing year over year as a result of renovations or general market trends (annual
        increases), or improved operational efficiencies. Occasionally, we may plan for vacancies so
        that we can renovate units.
      </Heading>
      <Button w={10} h={10} pos="absolute" bottom={6} right={4} onClick={nextStep}>
        <Icon as={BsChevronRight} />
      </Button>
    </Box>
  );
};
