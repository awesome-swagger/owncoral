import { Box, Center } from '@chakra-ui/react';
import type { PortfolioPropertyDetailT } from '../../../../../../shared-fullstack/types';
import { Headline } from '../../../../../../components/text';
import { DummyData } from '../../../../../../lib/portfolioData';

type DetailsTabPropsT = {
  propertyDetail: PortfolioPropertyDetailT;
};

const NewsTab = ({ propertyDetail }: DetailsTabPropsT) => {
  // const dummyData = DummyData;
  return (
    <Box>
      <Center my={6}>
        <Headline>Coming soon, please stay tuned!</Headline>
      </Center>
      {/* {dummyData.news.map((value: any, index: number) => ( */}
      {/*  <Box pos="relative" pl={6} key={index}> */}
      {/*    <Box w={4} h={4} borderRadius="full" bg="#000" left={-2} top={6} pos="absolute" /> */}
      {/*    <Heading fontSize="xs">{value.date}</Heading> */}
      {/*    <Heading fontSize="md" fontWeight="bold"> */}
      {/*      {value.title} */}
      {/*    </Heading> */}
      {/*    <Heading fontSize="sm">{value.description}</Heading> */}
      {/*  </Box> */}
      {/* ))} */}
    </Box>
  );
};

// eslint-disable-next-line import/no-default-export
export default NewsTab;
