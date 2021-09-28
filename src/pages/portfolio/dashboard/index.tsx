import { useState } from 'react';
import type { PortfolioDashboardPropertyT } from '../../../shared-fullstack/types';
import { Box, Divider } from '@chakra-ui/react';

import { Container } from '../../../components';
import { Title1 } from '../../../components/text';
// import { PopUpBox } from './popUpBox';
import { Properties, TotalDistribution } from './sections';

type PortfolioDashboardPropsT = {
  properties: PortfolioDashboardPropertyT[] | null;
  portfolioRootUrl: string;
};
const PortfolioDashboard = ({ properties, portfolioRootUrl }: PortfolioDashboardPropsT) => {
  // const [popUp, setPopUp] = useState(false);
  const [showAllProperties, setShowAllProperties] = useState(false);

  const handleClick = () => setShowAllProperties(!showAllProperties);

  return (
    <Container>
      <Box>
        <Title1 mb={4}>Portfolio</Title1>
        <TotalDistribution properties={properties} />
        <Divider mb={4} />
        <Properties
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
      {/* {popUp && <PopUpBox handleClose={setPopUp} />} */}
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default PortfolioDashboard;
