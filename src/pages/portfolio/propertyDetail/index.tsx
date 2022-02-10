import { Fragment, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { FiFile, FiX } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import type { PortfolioPropertyDetailT } from '../../../shared-fullstack/types';
import { AspectRatio, Box, Button, Center, Icon, Image, Portal, Spinner, useToast } from '@chakra-ui/react';

import Placeholder from '../../../assets/low-poly/low-poly-placeholder.png';
import { Container, DocumentsDrawer } from '../../../components';
import { fetchWrap } from '../../../lib/api';
import { DEFAULT_ERROR_TOAST } from '../../../lib/errorToastOptions';
import { PortfolioUrl } from '../../../lib/uriConstants';
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
  const toggleDrawer = useCallback(() => setDrawerIsOpen(!drawerIsOpen), [
    drawerIsOpen,
    setDrawerIsOpen,
  ]);
  const [loggedOut, setLoggedOut] = useState<boolean>(false);

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
        case 401:
          setLoggedOut(true);
          break;
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

  // Redirects logged out users to the logged in page
  // TODO: wrap this in a useLogout hook
  if (loggedOut) {
    window.location.assign("/login?flash=You've logged out");
  }

  return (
    // TODO: push spinners down to component level?
    <Container p={0} ref={portalRef}>
      {propertyUriFragmentToId !== null && propertyDetail !== null ? (
        <Fragment>
          <AspectRatio ratio={4 / 3}>
            <Image
              borderTopRadius={{ base: 'none', md: '2xl' }}
              src={propertyDetail.splashImageUrl || Placeholder}
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
              pos={{ base: 'fixed', md: 'absolute' }}
              top={5}
              left={5}
              h={8}
              w={8}
              p={2}
              as={FiX}
              cursor="pointer"
              onClick={() => history.push(PortfolioUrl)}
              borderRadius="full"
              boxShadow="xs"
              layerStyle="iconColor"
              zIndex={2}
            />
            {propertyDetail.docsUrls.length > 0 && (
              <Button
                pos={{ base: 'fixed', md: 'absolute' }}
                top={5}
                right={5}
                h={8}
                p={2}
                leftIcon={<FiFile />}
                onClick={toggleDrawer}
                borderRadius="full"
                boxShadow="xs"
                layerStyle="iconColor"
                variant='outline'
                zIndex={2}
              >
                Docs
              </Button>
            )}
          </Portal>
          <Box bg="inherit" p={6} pb={0} borderRadius="2xl" position="relative" bottom={6}>
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
          <DocumentsDrawer
            isOpen={drawerIsOpen}
            onToggle={toggleDrawer}
            documents={propertyDetail.docsUrls}
          />
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
