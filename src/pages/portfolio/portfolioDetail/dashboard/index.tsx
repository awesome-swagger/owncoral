import { useState } from 'react';
import { Flex, Icon, Heading } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { FiFilter } from 'react-icons/fi';
import { Container, BackBtn } from '../../../../components';
import { TotalDistribution, TopRankingProperties, CashFlow } from './sections';
import { PopUpBox } from './popUpBox';

export const Dashboard = () => {
  const [popUp, setPopUp] = useState(false);
  const history = useHistory();

  return (
    <Container>
      <Flex justifyContent="space-between" align="center">
        <BackBtn handleClick={() => history.goBack()} />
        <Heading fontSize="lg">Dashboard</Heading>
        <Icon as={FiFilter} h={4} w={4} cursor="pointer" onClick={() => setPopUp(true)} />
      </Flex>
      <TotalDistribution />
      <TopRankingProperties />
      <CashFlow />
      {popUp && <PopUpBox handleClose={setPopUp} />}
    </Container>
  );
}
