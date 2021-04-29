import { Fragment, useContext, useEffect, useState } from 'react';
import { AiFillCloseCircle, AiOutlineUpload } from 'react-icons/ai';
import { FiMoreHorizontal } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import type { PortfolioPropertyDetailT } from '../../../shared-fullstack/types';
import { Box, Center, Icon, Image, Spinner, useToast } from '@chakra-ui/react';

import PlaceholderPoly1 from '../../../assets/low-poly/3-Linden.png';
import { Container } from '../../../components';
import { fetchWrap } from '../../../lib/api';
import { DEFAULT_ERROR_TOAST } from '../../../lib/errorToastOptions';
import { useQuery } from '../../../lib/useQuery';
import { UserContext } from '../../../userContext';
import { TabSection, TopSection } from './sections';

type PortfolioPropertyDetailPropsT = {
  propertyUriFragmentToId: { [uriFragment: string]: string } | null;
  adminSelectedUser: string | null;
};
const PortfolioPropertyDetail = ({
  propertyUriFragmentToId,
  adminSelectedUser,
}: PortfolioPropertyDetailPropsT) => {
  const query = useQuery();
  const propertyUriFragment = query.get('property');
  const propertyId: string | null =
    propertyUriFragmentToId !== null && propertyUriFragment !== null
      ? propertyUriFragmentToId[propertyUriFragment] || null
      : null;
  const [propertyDetail, setPropertyDetail] = useState<PortfolioPropertyDetailT | null>(null);
  const [user] = useContext(UserContext);
  const currentUserId = user?.id;

  const history = useHistory();
  const toast = useToast();

  useEffect(() => {
    (async () => {
      if (propertyId === null) {
        return;
      }

      const resp = await fetchWrap('/api/portfolio-property-detail', {
        method: 'POST',
        body: JSON.stringify({
          propertyId,
          impersonatedUserId: adminSelectedUser || currentUserId,
        }),
      });

      if (resp.ok) {
        setPropertyDetail(await resp.json());
        return;
      }

      switch (resp.status) {
        default:
          toast({
            ...DEFAULT_ERROR_TOAST,
            description: 'Unable to load property',
          });
          break;
      }
    })();
  }, [
    propertyUriFragmentToId,
    propertyUriFragment,
    propertyId,
    adminSelectedUser,
    currentUserId,
    toast,
  ]);

  return (
    // TODO: push spinners down to component level?
    <Container padding={0}>
      {propertyUriFragmentToId !== null && propertyDetail !== null ? (
        <Fragment>
          <Image
            borderTopRadius={{ base: 'none', md: '2xl' }}
            src={PlaceholderPoly1}
            alt={propertyDetail.name + ' Image'}
            w="100%"
          />
          <Box p={6}>
            <Icon
              pos="absolute"
              top={10}
              left={10}
              h={8}
              w={8}
              color="white"
              as={AiFillCloseCircle}
              cursor="pointer"
              onClick={() => history.goBack()}
            />
            <Icon
              pos="absolute"
              top={10}
              right={10}
              h={8}
              w={8}
              p={1}
              color="white"
              as={FiMoreHorizontal}
              borderRadius="full"
              layerStyle="iconColor"
            />
            <Icon
              pos="absolute"
              top={10}
              right={20}
              mr={2}
              h={8}
              w={8}
              p={1}
              color="white"
              as={AiOutlineUpload}
              borderRadius="full"
              layerStyle="iconColor"
            />
            <TopSection propertyDetail={propertyDetail} />
            <Box h={4} />
            <TabSection
              propertyDetail={propertyDetail}
              propertyUriFragmentToId={propertyUriFragmentToId}
              adminSelectedUser={adminSelectedUser}
            />
          </Box>
        </Fragment>
      ) : (
        <Center h="100vh" w="100%">
          <Spinner />
        </Center>
      )}
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default PortfolioPropertyDetail;