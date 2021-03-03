import { Box } from '@chakra-ui/react';
import { BackBtn, HeadingTypography } from '../../../../components';

export const About = ({ goBack }: { goBack: () => void }) => {
  return (
    <Box p={6} overflow="auto">
      <BackBtn handleClick={goBack} pos="absolute" />

      <HeadingTypography mb={6} mt="0" mx="0" fontSize="lg" align="center">
        About Coral
      </HeadingTypography>
      <HeadingTypography fontSize="md">
        Faucibus augue venenat is dignissim at vel ultrices Tempor turpis quis scelerisque commado.
        Et aliquet odio neque donec et ultrices aliquet interdum sed. Consectetur enim, ut pharetra
        quam lorem odio auctor quis sed. Neque, nulla orci consectetur quis. Justo aliquet id risus
        integer amet, sllicitudin in eros.
      </HeadingTypography>
      <HeadingTypography fontSize="lg" my={6}>
        Lorem ipsum dolor sir
      </HeadingTypography>
      <HeadingTypography fontSize="md">
        Odio sed pharetra amet felis urna consectetur. Commodo mauris amet, lacus, etiam vel amet
        amet pharetra. Egestas adipiscing pulvinar facilisi volutpat tortor id diam tincidunt mi
        dictum viverra enim, odio nunc. Pharetra ut vestibulum ultricies.
      </HeadingTypography>
    </Box>
  );
};
