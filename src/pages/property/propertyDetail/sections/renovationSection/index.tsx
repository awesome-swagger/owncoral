import { Box, Flex, Heading, Icon, Image } from '@chakra-ui/react';
import { FiMapPin } from 'react-icons/fi';
import RenovationImg from '../../../../../assets/CapturaRenovation.png';

export const RenovationSection = () => (
  <Box>
    <Heading fontSize="2xl" fontWeight="bold">
      Renovations
    </Heading>
    <Flex className="custom_scroll" overflow="auto" my={6}>
      <Image mx={2} src={RenovationImg} />
      <Image mx={2} src={RenovationImg} />
      <Image mx={2} src={RenovationImg} />
    </Flex>
    <Heading fontSize="md">
      The property is currently vacant and needs a gut renovation. We expect to renovate with new
      appliances, flooring, cabinetry etc. to bring this property up to date and online for rental.
    </Heading>
    <Flex mt={6}>
      <Box minW={10}>
        <Icon as={FiMapPin} />
      </Box>
      <Box>
        <Heading my={1} fontSize="md" fontWeight="bold">
          Less than $50k
        </Heading>
        <Heading fontSize="sm">Expected spend per each unit</Heading>
      </Box>
    </Flex>
    <Flex mt={6}>
      <Box minW={10}>
        <Icon as={FiMapPin} />
      </Box>
      <Box>
        <Heading my={1} fontSize="md" fontWeight="bold">
          2 months
        </Heading>
        <Heading fontSize="sm">To bring it up to date and online for rental.</Heading>
      </Box>
    </Flex>
    <Flex mt={6}>
      <Box minW={10}>
        <Icon as={FiMapPin} />
      </Box>
      <Box>
        <Heading my={1} fontSize="md" fontWeight="bold">
          $6,350
        </Heading>
        <Heading fontSize="sm">Monthly rental income ($76,200 annually)</Heading>
      </Box>
    </Flex>
    <Box px={4} my={4} textAlign="center" border="1px">
      <Heading fontSize="lg"> Learn more about renovations</Heading>
    </Box>
  </Box>
);
