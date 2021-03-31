import { useState } from 'react';
import { Container, PropertyCard } from '../../../components';
import { Image, Center, Icon, Box } from '@chakra-ui/react';
import { FiMap, FiBarChart2 } from 'react-icons/fi';
import MapImg from '../../../assets/Frame269.png';
import { useHistory } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { PortfolioMap } from './portfolioMap';

const PortfolioDetailFlow = () => {
  const [step, setStep] = useState<any>(0);
  const history = useHistory();
  const handleRoute = (route: string) => history.push(`/portfolio-detail-flow/${route}`);
  const handleNextStep = () => {
    step === 1 ? handleRoute('property-detail') : step === 'map' ? setStep(1) : setStep(step + 1);
  };
  const handlePrevStep = () => {
    step === 0 ? null : setStep(step - 1);
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
        <PortfolioMap />
      ) : (
        <PropertyCard />
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
        onClick={() => setStep('map')}
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
        <Icon h={6} w={6} as={FiBarChart2} />
      </Center>
    </Box>
  </Container>
);
export default PortfolioDetailFlow;
