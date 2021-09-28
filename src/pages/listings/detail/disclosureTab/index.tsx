import { Divider, Text, VStack} from '@chakra-ui/react';
import { Title2 } from '../../../../components/text';

const DisclosureTab = () => (
  <VStack alignItems="flex-start" gridGap={6} px={6} mt={6}>
    <Text>
      Coral Money, Inc (Coral) operates a website at owncoral.com and this mobile app (the
      “Platform“). By using the Platform, you accept our [Terms of Service] and [Privacy Policy].
      This material shall not constitute an offer to sell or the solicitation to buy any securities
      or adopt any investment strategy. The information presented on the Platform has been developed
      internally and/or obtained from sources believed to be reliable; however, Coral does not
      guarantee the accuracy, adequacy or completeness of such information, and such information is
      subject to change. Nothing contained herein constitutes investment, legal, tax or other advice
      nor is it to be relied on in making an investment or other decision. The information contained
      herein is qualified by and subject to more detailed information in the applicable offering
      materials and agreements.
    </Text>
    <Divider />
    <Title2>Forward Looking Statements</Title2>
    <Text>
      Any forward-looking statements speak only as of the date they are made, and Coral assumes no
      duty to and does not undertake to update forward-looking statements. Forward-looking
      statements are subject to numerous assumptions, risks and uncertainties, which change over
      time. Actual results could differ materially from those anticipated in forward-looking
      statements.
    </Text>
    <Divider />
    <Title2>Limitations of Target Returns</Title2>
    <Text>
      Any target returns, cash flows or financial projections shown on the app are estimated
      predictions of performance only, are hypothetical, are not based on actual investment results
      and are not guarantees of future results. Estimated projections do not represent or guarantee
      the actual results of any transaction, and no representation is made that any transaction
      will, or is likely to, achieve results or profits similar to those shown.
    </Text>
    <Divider />
    <Title2>Risk of Loss</Title2>
    <Text>
      Investing in securities listed on the Coral app pose risks, including but not limited to the
      risks generally incident to the ownership, operation and development of real property. Because
      real estate, like many other types of long-term investments, historically has experienced
      significant fluctuation and cycles in value, specific market conditions may result in
      occasional or permanent reductions in the value of the Investments. Property cash flows and
      the marketability and value of real property are affected by a number of factors which are
      beyond the control of Coral.
    </Text>
    <Divider />
    <Title2>Performance Not Guranteed</Title2>
    <Text>
      Past performance is no guarantee of future results. Before investing you should: (1) conduct
      your own investigation and analysis; (2) carefully consider the investment and all related
      charges, expenses, uncertainties and risks, including all uncertainties and risks described in
      offering materials; and (3) consult with your own investment, tax, financial and legal
      advisors. Such securities are only suitable for accredited investors who understand and
      willing and able to accept the high risks associated with private investments.
    </Text>
    <Divider />
    <Title2>Liquidity Not Guranteed</Title2>
    <Text>
      Investments offered by Coral are illiquid and there is never any guarantee that you will be
      able to exit your investments on the secondary market or at what price an exit (if any) will
      be achieved.
    </Text>
    <Divider />
    <Title2>Requlatory Status</Title2>
    <Text>
      Coral is not registered as a broker-dealer or investment adviser, and is not a fiduciary by
      virtue of any person&apos;s use of or access to the app.
    </Text>
  </VStack>
);

// eslint-disable-next-line import/no-default-export
export default DisclosureTab;
