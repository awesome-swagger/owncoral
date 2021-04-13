import { useContext, useEffect, useState } from 'react';
import { FiFilter } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import type { PortfolioDashboardPropertyT } from '../../../shared-fullstack/validators';
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
  adminSelectedUser: string | null;
  portfolioRootUrl: string;
};
const PortfolioDashboard = ({ adminSelectedUser, portfolioRootUrl }: PortfolioDashboardPropsT) => {
  const [user] = useContext(UserContext);
  const [properties, setProperties] = useState<PortfolioDashboardPropertyT[] | null>(null);
  const currentUserId = user?.id;

  const [popUp, setPopUp] = useState(false);
  const [showAllProperties, setShowAllProperties] = useState(false);

  const history = useHistory();
  const toast = useToast();

  const handleClick = () => setShowAllProperties(!showAllProperties);
  useEffect(() => {
    (async () => {
      setProperties(null);
      const resp = await fetchWrap('/api/portfolio-dashboard', {
        method: 'POST',
        body: JSON.stringify({ selectedUser: adminSelectedUser || currentUserId }),
      });

      if (resp.ok) {
        const portfolio = await resp.json();
        setProperties(portfolio);
        return;
      }

      switch (resp.status) {
        default:
          toast({
            ...DEFAULT_ERROR_TOAST,
            ...{
              description: 'Unable to load portfolio',
            },
          });
          break;
      }
    })();
  }, [adminSelectedUser, currentUserId]);

  return (
    <Container showColorModeButton={false}>
      <Box>
        <Flex justifyContent="space-between" align="center">
          <BackBtn handleClick={() => history.goBack()} />
          <Heading size="sm" as="h5">
            Dashboard
          </Heading>
          <Icon as={FiFilter} h={4} w={4} cursor="pointer" onClick={() => setPopUp(true)} />
        </Flex>
        <TotalDistribution properties={properties} />
        <Divider mb={4} />
        <TopRankingProperties
          properties={properties}
          handleClick={handleClick}
          showAll={showAllProperties}
          portfolioRootUrl={portfolioRootUrl}
        />
        <Divider m={4} />
        {properties === null ? (
          <Center>
            <Spinner />
          </Center>
        ) : (
          // <div></div>
          <CashFlow />
        )}
      </Box>
      {popUp && <PopUpBox handleClose={setPopUp} />}
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default PortfolioDashboard;
