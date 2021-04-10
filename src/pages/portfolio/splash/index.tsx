import React, { useState } from 'react';
import { Image, Center, Icon, Box } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { FiMap } from 'react-icons/fi';
import { FaChartLine } from 'react-icons/fa';
import { Container, PropertyCard } from '../../../components';
import MapImg from '../../../assets/Frame269.png';
import { DummyData } from '../../../lib/portfolioData';

const PortfolioDetail = () => {
  const PortfolioData = DummyData;

  const [step, setStep] = useState<any>(0);
  const history = useHistory();
  const handleRoute = (route: string) => history.push(`/portfolio/${route}`);
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
        <Portfolio newRoute={handleRoute} nextStep={handleNextStep} />
      ) : (
        <PropertyCard data={PortfolioData} handleClose={handlePrevStep} />
      )}
    </div>
  );
};

const Portfolio = ({
  newRoute,
  nextStep,
}: {
  newRoute: (route: string) => void;
  nextStep: () => void;
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
        onClick={() => newRoute('')}
      >
        <Icon h={6} w={6} as={FaChartLine} />
      </Center>
    </Box>
  </Container>
);

// eslint-disable-next-line import/no-default-export
export default PortfolioDetail;
