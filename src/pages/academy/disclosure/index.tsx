import { Text, VStack } from '@chakra-ui/react';

export const Disclosure = () => (
  <VStack alignItems="flex-start" mt={6} gridGap={4}>
    <Text>
      This material is solely for informational purposes and shall not constitute an offer to sell
      or the solicitation to buy securities. The opinions expressed herein represent the current,
      good faith views of the author(s) at the time of publication and are provided for limited
      purposes, are not definitive investment advice, and should not be relied on as such. The
      information presented in these articles has been developed internally and/or obtained from
      sources believed to be reliable; however, Coral does not guarantee the accuracy, adequacy or
      completeness of such information. Predictions, opinions, and other information contained in
      this article are subject to change continually and without notice of any kind and may no
      longer be true after the date indicated. Any forward-looking statements speak only as of the
      date they are made, and Coral assumes no duty to and does not undertake to update forward-
      looking statements. Forward-looking statements are subject to numerous assumptions, risks and
      uncertainties, which change over time. Actual results could differ materially from those
      anticipated in forward-looking statements.
    </Text>
    <Text>
      Reliance upon information in this material is at the sole discretion of the reader. Investing
      involves risks.
    </Text>
    <Text>&copy; Coral Money, Inc. 2021</Text>
  </VStack>
);
