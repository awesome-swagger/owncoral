import { Box, Divider, Flex, FlexProps, Text, useColorModeValue } from '@chakra-ui/react';

/**
 * @chakra-pro component
 * Custom divider that allows adding text in its center.
 *
 * Source: https://pro.chakra-ui.com/components/application-ui/authentication
 */
export const DividerWithText = (props: FlexProps) => {
  const { children, mx, ...flexProps } = props;
  return (
    <Flex align="center" color="gray.300" {...flexProps} width="100%">
      <Box flex="1">
        <Divider borderColor="currentcolor" />
      </Box>
      <Box mx={2}>
        <Text as="span" mx={mx}>
          {children}
        </Text>
      </Box>
      <Box flex="1">
        <Divider borderColor="currentcolor" />
      </Box>
    </Flex>
  );
};
