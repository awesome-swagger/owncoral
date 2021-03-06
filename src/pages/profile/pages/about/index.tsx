import type React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { BackBtn } from '../../../../components';

export const About = ({ goBack }: { goBack: () => void }) => {
  return (
    <Box overflow="auto">
      <BackBtn handleClick={goBack} pos="absolute" />

      <Heading mb={6} mt="0" mx="0" fontSize="lg" align="center">
        About Coral
      </Heading>
      <Heading fontSize="md">
        Faucibus augue venenat is dignissim at vel ultrices Tempor turpis quis scelerisque commado.
        Et aliquet odio neque donec et ultrices aliquet interdum sed. Consectetur enim, ut pharetra
        quam lorem odio auctor quis sed. Neque, nulla orci consectetur quis. Justo aliquet id risus
        integer amet, sllicitudin in eros.
      </Heading>
      <Heading fontSize="lg" my={6}>
        Lorem ipsum dolor sir
      </Heading>
      <Heading fontSize="md">
        Odio sed pharetra amet felis urna consectetur. Commodo mauris amet, lacus, etiam vel amet
        amet pharetra. Egestas adipiscing pulvinar facilisi volutpat tortor id diam tincidunt mi
        dictum viverra enim, odio nunc. Pharetra ut vestibulum ultricies.
      </Heading>
    </Box>
  );
};
