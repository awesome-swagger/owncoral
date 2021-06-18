import { Fragment } from 'react';
import {
  FiDollarSign,
  FiExternalLink,
  FiFile,
  FiHelpCircle,
  FiLogOut,
  FiUser,
} from 'react-icons/fi';
import { Switch, useHistory, useRouteMatch } from 'react-router-dom';
import { Box, Icon, Link as ChakraLink, VStack } from '@chakra-ui/react';

import { Container, NavBar, Option, OptionGroup, ProtectedRoute } from '../../components';
import { Overline } from '../../components/text';
import { fetchWrap } from '../../lib/api';
import Error404 from '../error404';
import {
  Faq,
  Fees,
  LegalStructure,
  PersonalInformation,
} from './pages';
import { ProfileHeader } from './profileHeader';

function Profile() {
  const { url: profileUrl } = useRouteMatch();
  const history = useHistory();
  const goBack = () => {
    history.push(profileUrl);
  };

  return (
    <Fragment>
      <NavBar />
      <Container>
        <Switch>
          <ProtectedRoute exact path={profileUrl}>
            <ProfileContent />
          </ProtectedRoute>

          <ProtectedRoute path={profileUrl + '/personal-info'}>
            <PersonalInformation goBack={goBack} />
          </ProtectedRoute>

          <ProtectedRoute path={profileUrl + '/fees'}>
            <Fees goBack={goBack} />
          </ProtectedRoute>

          <ProtectedRoute path={profileUrl + '/legal-structure'}>
            <LegalStructure goBack={goBack} />
          </ProtectedRoute>

          <ProtectedRoute path={profileUrl + '/faq'}>
            <Faq goBack={goBack} />
          </ProtectedRoute>
          <ProtectedRoute path="*" component={Error404} />
        </Switch>
      </Container>
    </Fragment>
  );
}

export const ProfileContent = () => {
  const { url: profileUrl } = useRouteMatch();
  const history = useHistory();

  return (
    <Fragment>
      <ProfileHeader />
      <VStack spacing={8} w="100%">
        <Box w="100%">
          <Overline ml={3} mb={2} display="block">
            Account
          </Overline>
          <OptionGroup>
            <Option onClick={() => history.push(profileUrl + '/personal-info')}>
              <Icon as={FiUser} h={4} w={4} marginRight={4} />
              Personal information
            </Option>
            {/* <Option onClick={() => handleClick(2)}>
              <Icon as={FiTarget} h={5} w={5} marginRight={2} />
              Investment goals
            </Option> */}
          </OptionGroup>
        </Box>
        <Box w="100%">
          <Overline ml={3} mb={2} display="block">
            About
          </Overline>
          <OptionGroup>
            <Option onClick={() => history.push(profileUrl + '/fees')}>
              <Icon as={FiDollarSign} h={4} w={4} marginRight={4} />
              Fees
            </Option>
            <Option onClick={() => history.push(profileUrl + '/legal-structure')}>
              <Icon viewBox="0 0 15 15" h={4} w={4} marginRight={4}>
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.68799 1.41083C8.64051 1.41399 8.57225 1.43768 8.50952 1.5004C8.46659 1.54333 8.40257 1.62349 8.29401 1.77633C8.25956 1.82483 8.21556 1.888 8.16627 1.95877C8.08823 2.0708 7.99694 2.20187 7.90928 2.32392C7.59499 2.76153 7.16755 3.31378 6.54534 3.93599C5.92313 4.5582 5.37088 4.98565 4.93326 5.29994C4.81121 5.38759 4.68015 5.47888 4.56812 5.55692C4.49735 5.60621 4.43418 5.65021 4.38567 5.68467C4.23284 5.79322 4.15268 5.85725 4.10975 5.90018C4.04702 5.96291 4.02334 6.03117 4.02017 6.07865C4.01863 6.10178 4.02201 6.11692 4.02467 6.12456C4.02701 6.13127 4.02923 6.13393 4.03118 6.13588L6.23107 8.33577C6.23301 8.33771 6.23568 8.33994 6.24239 8.34227C6.25003 8.34493 6.26517 8.34832 6.2883 8.34678C6.33578 8.34361 6.40404 8.31993 6.46677 8.2572C6.5097 8.21427 6.57372 8.13411 6.68228 7.98128C6.71673 7.93277 6.76073 7.8696 6.81003 7.79883C6.88806 7.6868 6.97936 7.55574 7.06701 7.43369C7.3813 6.99607 7.80874 6.44382 8.43095 5.82161C9.05317 5.1994 9.60542 4.77196 10.043 4.45767C10.1651 4.37001 10.2962 4.27871 10.4082 4.20068C10.4789 4.15139 10.5421 4.10739 10.5906 4.07293C10.7435 3.96438 10.8236 3.90036 10.8665 3.85742C10.9293 3.7947 10.953 3.72644 10.9561 3.67896C10.9577 3.65583 10.9543 3.64069 10.9516 3.63305C10.9493 3.62634 10.9471 3.62367 10.9451 3.62172L8.74523 1.42184C8.74328 1.41989 8.74061 1.41767 8.7339 1.41533C8.72626 1.41267 8.71112 1.40929 8.68799 1.41083ZM7.56671 0.557595C8.1131 0.0112101 9.06678 -0.142223 9.68804 0.479027L11.8879 2.67891C12.5092 3.30016 12.3557 4.25385 11.8094 4.80023C11.6787 4.93087 11.515 5.05184 11.3627 5.15997C11.2865 5.21411 11.2169 5.2625 11.1452 5.31226C11.0479 5.37987 10.947 5.45003 10.8208 5.54064C10.5423 5.74065 10.2184 5.98684 9.8588 6.30665L14.5592 11.007C14.8195 11.2674 14.8195 11.6895 14.5592 11.9498C14.2988 12.2102 13.8767 12.2102 13.6164 11.9498L8.91599 7.24946C8.59619 7.60903 8.34999 7.93298 8.14999 8.21147C8.05937 8.33764 7.98921 8.4386 7.92161 8.5359C7.87184 8.60752 7.82345 8.67715 7.76931 8.75337C7.66118 8.90561 7.54021 9.06937 7.40958 9.20001C6.86319 9.74639 5.90951 9.89983 5.28826 9.27858L3.08837 7.07869C2.46712 6.45744 2.62055 5.50375 3.16694 4.95737C3.29757 4.82673 3.46133 4.70577 3.61358 4.59763C3.6898 4.54349 3.75943 4.49511 3.83106 4.44534C3.92835 4.37773 4.02931 4.30757 4.15548 4.21696C4.55425 3.93057 5.04623 3.54948 5.60253 2.99318C6.15883 2.43688 6.53991 1.94491 6.82631 1.54614C6.91692 1.41997 6.98708 1.319 7.05468 1.22171C7.10445 1.15009 7.15284 1.08046 7.20698 1.00423C7.31511 0.851989 7.43608 0.688231 7.56671 0.557595ZM0.96936 13.3404C0.96936 12.9722 1.26784 12.6737 1.63603 12.6737L8.30269 12.6737C8.67088 12.6737 8.96936 12.9722 8.96936 13.3404C8.96936 13.7085 8.67088 14.007 8.30269 14.007L1.63603 14.007C1.26784 14.007 0.96936 13.7085 0.96936 13.3404Z" // editorconfig-checker-disable-line
                />
              </Icon>
              Legal Structure
            </Option>
            <Option onClick={() => history.push(profileUrl + '/faq')}>
              <Icon as={FiHelpCircle} h={4} w={4} marginRight={4} />
              FAQ
            </Option>
            {/* <Option onClick={() => handleClick(6)}>
              <Icon as={FiHeadphones} h={4} w={4} marginRight={4} />
              Support
            </Option> */}
          </OptionGroup>
        </Box>
        <Box w="100%">
          <Overline ml={3} mb={2} display="block">
            Legal
          </Overline>
          <OptionGroup>
            <ChakraLink href="https://www.owncoral.com/user-agreement" isExternal>
              <Option icon={FiExternalLink}>
                <Icon as={FiFile} w={4} h={4} mr={4} />
                User Agreement
              </Option>
            </ChakraLink>
            <ChakraLink href="https://www.owncoral.com/privacy" isExternal>
              <Option icon={FiExternalLink}>
                <Icon as={FiFile} w={4} h={4} mr={4} />
                Privacy Policy
              </Option>
            </ChakraLink>
          </OptionGroup>
        </Box>
        <Box w="100%">
          <OptionGroup>
            <Option
              onClick={async () => {
                await fetchWrap('/api/logout', { method: 'GET' }, true);
                window.location.href = '/';
              }}
            >
              <Icon as={FiLogOut} h={4} w={4} mr={4} />
              Log out
            </Option>
          </OptionGroup>
        </Box>
      </VStack>
    </Fragment>
  );
};

// eslint-disable-next-line import/no-default-export
export default Profile;
