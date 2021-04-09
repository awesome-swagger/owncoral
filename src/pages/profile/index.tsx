import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Portal } from '@chakra-ui/react';

import { Container } from '../../components';
import { Account } from './account';
import { Help } from './help';
import { Legal } from './legal';
import { LogoutSelector } from './logoutSelector';
import { About, Faqs, InvestmentGoal, Notification, PersonalInformation } from './pages';
import { PopUp } from './popup';
import { ProfileHeader } from './profileHeader';

function Profile() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [overLay, setOverLay] = useState<Number | String | null>(null);
  // TODO: either remove dead code or re-implement disabling account
  const [popUp, setPopUp] = useState<String | null>('');

  const location = useLocation();

  const handleClose = () => setOverLay(null);
  const handleClick = (value: Number | String) => setOverLay(value);
  const handlePopUp = (value: String) => setPopUp(value);

  useEffect(() => {
    const query = new URLSearchParams(location.search);

    let overlayLoc = query.get('overlay');

    if (typeof overlayLoc !== 'undefined') {
      setOverLay(Number(overlayLoc));
    }
  }, [location, setOverLay]);

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.scrollTo(0, 0);
    }
  }, [overLay]);

  const containerComponent = (overlay: any) => {
    switch (overlay) {
      case 1:
        return <PersonalInformation goBack={handleClose} />;
      case 2:
        return <InvestmentGoal goBack={handleClose} />;
      case 3:
        return <Notification goBack={handleClose} />;
      case 4:
        return <About goBack={handleClose} />;
      case 5:
        return <Faqs goBack={handleClose} />;
      default:
        return <ProfileContent handleClick={handleClick} />;
    }
  };

  return (
    <Container ref={ref}>
      {containerComponent(overLay)}

      {popUp && (
        <Portal containerRef={ref}>
          <PopUp value={popUp} handleClick={setPopUp} />
        </Portal>
      )}
    </Container>
  );
}

export const ProfileContent = ({
  handleClick,
  popOver = false,
}: {
  handleClick: (x: Number) => void;
  popOver?: boolean;
}) => (
  <Box borderRadius="xl" overflow="hidden">
    <ProfileHeader />
    <Account popOver={popOver} handleClick={handleClick} />
    <Help popOver={popOver} handleClick={handleClick} />
    <Legal popOver={popOver} />
    <LogoutSelector popOver={popOver} />
  </Box>
);

// eslint-disable-next-line import/no-default-export
export default Profile;
