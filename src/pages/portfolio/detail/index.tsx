import { useState } from 'react';
import { Image, Center, Icon, Box } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { FiMap } from 'react-icons/fi';
import { FaChartLine } from 'react-icons/fa';
import { Container, PropertyCard } from '../../../components';
import { PortfolioMap2 } from './portfolioMap';
import MapImg from '../../../assets/Frame269.png';
import { useSwipeable } from 'react-swipeable';
import { DummyData } from '../../../lib/portfolioData';

const PortfolioDetail2 = () => {
  const PortfolioData = DummyData;

  const [step, setStep] = useState<any>(0);
  const history = useHistory();
  const handleRoute = (route: string) => history.push(`/portfolio/overview/${route}`);
  const handleNextStep = () => {
    if (step === 1) handleRoute('property-detail');
    else if (step === 'map') setStep(1);
    else setStep(step + 1);
  };
  const handlePrevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNextStep,
    onSwipedRight: handlePrevStep,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  return (
    <div {...handlers}>
      {step === 0 ? (
        <Portfolio newRoute={handleRoute} nextStep={handleNextStep} setStep={setStep} />
      ) : step === 'map' ? (
        <PortfolioMap2 />
      ) : (
        <PropertyCard data={PortfolioData} handleClose={handlePrevStep} />
      )}
    </div>
  );
};
const Portfolio = ({
  newRoute,
  nextStep,
  setStep,
}: {
  newRoute: (route: string) => void;
  nextStep: () => void;
  setStep: React.Dispatch<any>;
}) => (
  <Container>
    <Box pos="relative" mx="auto">
      <Image w="100%" src={MapImg} onClick={nextStep} />
      <Center
        borderRadius="full"
        layerStyle="iconColor"
        pos="absolute"
        bottom={4}
        right={4}
        p={3}
        cursor="pointer"
        onClick={() => newRoute('map')}
      >
        <Icon h={6} w={6} as={FiMap} />
      </Center>
      <Center
        borderRadius="full"
        layerStyle="iconColor"
        pos="absolute"
        bottom={16}
        right={4}
        p={3}
        cursor="pointer"
        mb={2}
        onClick={() => newRoute('dashboard')}
      >
        <Icon h={6} w={6} as={FaChartLine} />
      </Center>
    </Box>
  </Container>
);

// eslint-disable-next-line import/no-default-export
export default PortfolioDetail2;
