import { Spinner, Image, Center } from '@chakra-ui/react';
import Logo from '../../assets/Coral.png';

export const SplashScreen = () => (
  <Center h="100vh" bg="#FF5D5D" position="relative">
    <Image src={Logo} alt="logo" />
    <Spinner
      position="absolute"
      bottom={8}
      size="md"
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="secondary.500"
    />
  </Center>
);
