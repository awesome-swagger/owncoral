import { Box, Flex, Heading, Divider, Center, Icon } from '@chakra-ui/react';
import { BsQuestionCircle } from 'react-icons/bs';

export const Financing = ({ data }: { data: any }) => (
  <Box>
    <Box>
      <Heading fontSize="lg" fontWeight="bold">
        Total capital costs
      </Heading>
      <Flex justifyContent="space-between">
        <Heading fontSize="md">Purchase price</Heading>
        <Heading fontSize="md">{data.purchasePrice}</Heading>
      </Flex>
      <Flex justifyContent="space-between">
        <Heading fontSize="md">Closing costs</Heading>
        <Heading fontSize="md">{data.closingCost}</Heading>
      </Flex>
      <Flex justifyContent="space-between">
        <Heading fontSize="md">Acquisition Fee</Heading>
        <Heading fontSize="md">{data.acquisitionFee}</Heading>
      </Flex>
      <Flex justifyContent="space-between">
        <Heading fontSize="md">Capex Reserve</Heading>
        <Heading fontSize="md">{data.capexReserve}</Heading>
      </Flex>
      <Flex my={4} borderTop="1px" borderStyle="dashed" justifyContent="space-between">
        <Heading fontSize="md" fontWeight="bold">
          Total capital cost
        </Heading>
        <Heading fontSize="md" fontWeight="bold">
          {data.totalCapitalCost}
        </Heading>
      </Flex>
      <Box border="1px" layerStyle="lightBorder" textAlign="center">
        <Heading fontSize="md">Learn more about the capital cost </Heading>
      </Box>
    </Box>
    <Divider my={8} />
    <Box>
      <Heading fontSize="2xl" fontWeight="bold">
        Financing
      </Heading>

      <Flex my={4} borderRadius="base" overflow="hidden" h={8} justifyContent="space-between">
        <Box bg="gray.900" w="43.5%" /> <Box bg="gray.700" w="56%" />
      </Flex>
      <Center justifyContent="space-between" h={14} my={4}>
        <Box>
          <Heading fontSize="md" fontWeight="bold">
            Equity
          </Heading>
          <Heading fontSize="sm">{data.equity}</Heading>
        </Box>
        <Box h="100%" borderLeft="1px" px={4}>
          <Heading fontSize="md" fontWeight="bold">
            Loan
          </Heading>
          <Heading fontSize="sm">{data.loan}</Heading>
        </Box>
        <Box pl={8}>
          <Icon w={6} h={6} as={BsQuestionCircle} />
        </Box>
      </Center>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        px={4}
        py={2}
        my={4}
        border="1px"
        layerStyle="lightBorder"
      >
        <Box>
          <Heading fontSize="md" fontWeight="bold">
            Why Coral participates in equity?
          </Heading>
          <Heading fontSize="sm">Crash course</Heading>
        </Box>
        <Box>
          <Icon w={6} h={6} as={BsQuestionCircle} />
        </Box>
      </Flex>
      <Box border="1px" layerStyle="lightBorder" mt={6} textAlign="center">
        <Heading fontSize="md">Learn more about financing</Heading>
      </Box>
    </Box>
  </Box>
);
