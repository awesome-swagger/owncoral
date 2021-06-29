import { Fragment } from 'react';
import { Box, Text } from '@chakra-ui/react';

import { BackBtn } from '../../../../components';
import { Title2 } from '../../../../components/text';

export const LegalStructure = ({ goBack }: { goBack: () => void }) => (
  <Fragment>
    <BackBtn handleClick={goBack} pos="absolute" />

    <Title2 mt={2} mb={4} align="center">
      Legal Structure
    </Title2>
    <Box h={4} />
    <Text mb={6}>
      Coral‘s legal structure makes you a true owner — and simultaneously protects you from legal
      liability.
    </Text>

    <Text mb={6}>
      We create a property LLC for each property. You become a co-owner of property by way of the
      LLC, a “pass-through entity” which allows you to receive all the benefits of direct ownership
      including tax benefits and funds from operations.
    </Text>

    <Text mb={6}>
      Coral is the manager of the LLC — this means that you can sit back and enjoy your property and
      your earnings while we do all the heavy lifting. We execute on the business plan, update you
      on progress, and raise any big decisions to you and your co-owners for a vote!
    </Text>
  </Fragment>
);
