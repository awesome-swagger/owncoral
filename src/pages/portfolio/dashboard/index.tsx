import { useContext, useEffect, useState } from 'react';
import { FiFilter } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import type { PortfolioDashboardPropertyT } from '../../../shared-fullstack/types';
import { Box, Center, Divider, Flex, Heading, Icon, Spinner, useToast } from '@chakra-ui/react';

import { BackBtn, Container, NavBar } from '../../../components';
import { fetchWrap } from '../../../lib/api';
import { DEFAULT_ERROR_TOAST } from '../../../lib/errorToastOptions';
// TODO: remove
import { DummyData } from '../../../lib/portfolioData';
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
        <Center>
          <Heading size="sm" as="h5">
            Dashboard
          </Heading>
          {/* <Icon as={FiFilter} h={4} w={4} cursor="pointer" onClick={() => setPopUp(true)} /> */}
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
