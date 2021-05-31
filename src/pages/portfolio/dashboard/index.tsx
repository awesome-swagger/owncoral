import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import type { PortfolioDashboardPropertyT } from '../../../shared-fullstack/types';
import { Box, Center, Divider, Heading, Spinner } from '@chakra-ui/react';

import { BackBtn, Container } from '../../../components';
import { LargeTitle } from '../../../components/text';
// TODO: remove
import { UserContext } from '../../../userContext';
import { PopUpBox } from './popUpBox';
import { CashFlow, TopRankingProperties, TotalDistribution } from './sections';

type PortfolioDashboardPropsT = {
  properties: PortfolioDashboardPropertyT[] | null;
  portfolioRootUrl: string;
};
const PortfolioDashboard = ({ properties, portfolioRootUrl }: PortfolioDashboardPropsT) => {
  const [popUp, setPopUp] = useState(false);
  const [showAllProperties, setShowAllProperties] = useState(false);

  const history = useHistory();

  const handleClick = () => setShowAllProperties(!showAllProperties);

  return (
    <Container showColorModeButton={false}>
      <Box>
        <BackBtn top={6} left={6} pos="absolute" handleClick={() => history.goBack()} />
        <Center mb={4}>
          <LargeTitle>Dashboard</LargeTitle>
        </Center>
        <TotalDistribution properties={properties} />
        <Divider mb={4} />
        <TopRankingProperties
          properties={properties}
          handleClick={handleClick}
          showAll={showAllProperties}
          portfolioRootUrl={portfolioRootUrl}
        />
        {/* <Divider m={4} /> */}
        {/* {properties === null ? ( */}
        {/*  <Center> */}
        {/*    <Spinner /> */}
        {/*  </Center> */}
        {/* ) : ( */}
        {/*  // <div></div> */}
        {/*  <CashFlow /> */}
        {/* )} */}
      </Box>
      {popUp && <PopUpBox handleClose={setPopUp} />}
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default PortfolioDashboard;
