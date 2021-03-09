import { useState, useRef, useLayoutEffect } from 'react';
import { Portal, Box } from '@chakra-ui/react';
import { Account } from './account';
import { Help } from './help';
import { Header } from './header';
import { Legal } from './legal';
import { Footer } from './footer';
import { PopUp } from './popup';
import { PersonalInformation, InvestmentGoal, Notification, About, Faqs } from './pages';
import { Container } from '../../components';

function Profile() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [overLay, setOverLay] = useState<Number | String | null>(null);
  const [popUp, setPopUp] = useState<String | null>('');

  const handleClose = () => setOverLay(null);
  const handleClick = (value: Number | String) => setOverLay(value);
  const handlePopUp = (value: String) => setPopUp(value);

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.scrollTo(0, 0);
    }
  }, [overLay]);

  return (
    <Container ref={ref}>
      {overLay ? '' : <ProfileContent handleClick={handleClick} />}

      {overLay === 1 ? (
        <PersonalInformation goBack={handleClose} handleClick={handlePopUp} />
      ) : overLay === 2 ? (
        <InvestmentGoal goBack={handleClose} />
      ) : overLay === 3 ? (
        <Notification goBack={handleClose} />
      ) : overLay === 4 ? (
        <About goBack={handleClose} />
      ) : overLay === 5 ? (
        <Faqs goBack={handleClose} />
      ) : (
        ''
      )}

      {popUp ? (
        <Portal containerRef={ref}>
          <PopUp value={popUp} handleClick={setPopUp} />
        </Portal>
      ) : (
        ''
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
    <Header />
    <Account popOver={popOver} handleClick={handleClick} />
    <Help popOver={popOver} handleClick={handleClick} />
    <Legal popOver={popOver} />
    <Footer popOver={popOver} />
  </Box>
);

// eslint-disable-next-line import/no-default-export
export default Profile;
