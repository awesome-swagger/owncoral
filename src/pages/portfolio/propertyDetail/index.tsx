import { Fragment, useContext, useEffect, useState, useCallback, useRef, createRef } from 'react';
import { FiX, FiFile } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import type { PortfolioPropertyDetailT } from '../../../shared-fullstack/types';
import { AspectRatio, Box, Center, Icon, Image, Portal, Spinner, useToast } from '@chakra-ui/react';

import { Container, DocumentsDrawer } from '../../../components';
import { fetchWrap } from '../../../lib/api';
import { DEFAULT_ERROR_TOAST } from '../../../lib/errorToastOptions';
import { useQuery } from '../../../lib/useQuery';
import { UserContext } from '../../../userContext';
import { TabSection, TopSection } from './sections';
import Placeholder from '../../../assets/low-poly-placeholder.png';

type PortfolioPropertyDetailPropsT = {
  propertyUriFragmentToId: { [uriFragment: string]: string } | null;
  adminSelectedUser: string | null;
};
const PortfolioPropertyDetail = ({
  propertyUriFragmentToId,
  adminSelectedUser,
}: PortfolioPropertyDetailPropsT) => {
  const query = useQuery();
  const portalRef = useRef<HTMLDivElement>(null);
  const propertyUriFragment = query.get('property');
  const propertyId: string | null =
    propertyUriFragmentToId !== null && propertyUriFragment !== null
      ? propertyUriFragmentToId[propertyUriFragment] || null
      : null;
  const [propertyDetail, setPropertyDetail] = useState<PortfolioPropertyDetailT | null>(null);
  const [user] = useContext(UserContext);
  const currentUserId = user?.id;
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const toggleDrawer = useCallback(() => setDrawerIsOpen(!drawerIsOpen), [drawerIsOpen, setDrawerIsOpen]);

  const history = useHistory();
  const toast = useToast();

  useEffect(() => {
    (async () => {
      if (propertyId === null) {
        return;
      }
      const requestOptions = {
        propertyId,
      };
      if (user?.isAdmin) {
        Object.assign(requestOptions, { impersonatedUserId: adminSelectedUser || currentUserId });
      }

      const resp = await fetchWrap('/api/portfolio-property-detail', {
        method: 'POST',
        body: JSON.stringify(requestOptions),
      });

      if (resp === null) {
        return;
      }

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
    user,
  ]);

  return (
    // TODO: push spinners down to component level?
    <Container padding={0} ref={portalRef}>
      {propertyUriFragmentToId !== null && propertyDetail !== null ? (
        <Fragment>
          <AspectRatio ratio={4 / 3}>
            <Image
              borderTopRadius={{ base: 'none', md: '2xl' }}
              src={
                propertyDetail.imageUrls === undefined || propertyDetail.imageUrls.length === 0
                  ? Placeholder
                  : propertyDetail.imageUrls[0]
              }
              alt={propertyDetail.name + ' Image'}
              w="100%"
              fallback={
                <Center>
                  <Spinner />
                </Center>
              }
            />
          </AspectRatio>
          <Portal containerRef={portalRef}>
            <Icon
              pos="absolute"
              top={5}
              left={5}
              h={8}
              w={8}
              p={2}
              as={FiX}
              cursor="pointer"
              onClick={() => history.push('/portfolio')}
              borderRadius="full"
              layerStyle="iconColor"
            />
            {propertyDetail.docsUrls.length > 0 &&
              <Icon
                pos="absolute"
                top={5}
                right={5}
                h={8}
                w={8}
                p={2}
                as={FiFile}
                cursor="pointer"
                onClick={toggleDrawer}
                borderRadius="full"
                layerStyle="iconColor"
              />
            }
          </Portal>
          <Box bg="inherit" p={6} pb={0} borderRadius="2xl" position="relative" bottom={6}>
            {/* <Icon
              pos="absolute"
              top={10}
              right={10}
              h={8}
              w={8}
              p={1}
              as={FiMoreHorizontal}
              borderRadius="full"
              boxShadow="base"
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
              as={AiOutlineUpload}
              borderRadius="full"
              boxShadow="base"
              layerStyle="iconColor"
            /> */}
            <TopSection
              propertyDetail={propertyDetail}
              propertyUriFragmentToId={propertyUriFragmentToId}
              adminSelectedUser={adminSelectedUser}
            />
            <TabSection
              propertyDetail={propertyDetail}
              propertyUriFragmentToId={propertyUriFragmentToId}
              adminSelectedUser={adminSelectedUser}
            />
          </Box>
          <DocumentsDrawer isOpen={drawerIsOpen} onToggle={toggleDrawer} documents={propertyDetail.docsUrls} />
        </Fragment>
      ) : (
        <Center w="100%" h={window.innerHeight}>
          <Spinner />
        </Center>
      )}
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default PortfolioPropertyDetail;
