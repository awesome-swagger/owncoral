import React, { useState } from 'react';
import { FaChartLine } from 'react-icons/fa';
import { FiMap } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { Box, Center, Icon, Image } from '@chakra-ui/react';

import MapImg from '../../../../assets/Frame269.png';
import { Container, PropertyCard } from '../../../../components';
import { DummyData } from '../../../../lib/portfolioData';

/*
  TODO:
    - Clicking house on neighborhood (low-poly) map leads to property card
    - Allow click-through property card into property details
    - Use framer-motion rather than react-swipeable
    - Working low-poly
 */
const PortfolioSplash = () => {
  const PortfolioData = DummyData;

  const [step, setStep] = useState<any>(0);
  const history = useHistory();
  const handleRoute = (route: string) => history.push(`/portfolio/${route}`);
  const handleNextStep = () => {
    // TODO: remove fake data
    if (step === 1) handleRoute('property/dummyData');
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
        <NeighborhoodMap newRoute={handleRoute} nextStep={handleNextStep} />
      ) : (
        <PropertyCard data={PortfolioData} handleClose={handlePrevStep} />
      )}
    </div>
  );
};

const NeighborhoodMap = ({
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
export default PortfolioSplash;
