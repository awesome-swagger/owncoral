import { Center, Icon, Heading } from '@chakra-ui/react';
import { BiError } from 'react-icons/bi';
const Error404 = () => (
  <Center h="100vh">
    <Center
      flexDirection="column"
      boxShadow={{ base: 'none', md: 'lg' }}
      py={{ base: 0, md: 10 }}
      px={{ base: 0, md: 32 }}
      borderRadius="2xl"
    >
      <Icon as={BiError} h={{ base: 28, md: 40 }} w={{ base: 28, md: 40 }} />
      <Heading fontSize={{ base: '5xl', md: '7xl' }} m="0">
        404 Error
      </Heading>
      <Heading fontSize={{ base: 'xl', md: '3xl' }} mt="0">
        Page Not Found
      </Heading>
    </Center>
  </Center>
);

export default Error404;
