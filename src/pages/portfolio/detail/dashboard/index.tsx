import { useState } from 'react';
import { Flex, Icon, Heading, Divider, Box } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { FiFilter } from 'react-icons/fi';
import { Container, BackBtn } from '../../../../components';
import { TotalDistribution, TopRankingProperties, CashFlow } from './sections';
import { PopUpBox } from './popUpBox';
import { DummyData } from '../../../../lib/portfolioData';

export const Dashboard = () => {
  const PortfolioData = DummyData;

  const [popUp, setPopUp] = useState(false);
  const [allProperties, setAllProperties] = useState(false);
  const history = useHistory();

  const handleClick = () => setAllProperties(!allProperties);

  return (
    <Container>
      {allProperties ? (
        <TopRankingProperties handleClick={handleClick} showAll={allProperties} />
      ) : (
        <Box>
          <Flex justifyContent="space-between" align="center">
            <BackBtn handleClick={() => history.goBack()} />
            <Heading fontSize="lg">Dashboard</Heading>
            <Icon as={FiFilter} h={4} w={4} cursor="pointer" onClick={() => setPopUp(true)} />
          </Flex>
          <TotalDistribution data={PortfolioData} />
          <Divider mb={4} />
          <TopRankingProperties handleClick={handleClick} showAll={allProperties} />
          <CashFlow />
        </Box>
      )}
      {popUp && <PopUpBox handleClose={setPopUp} />}
    </Container>
  );
};
