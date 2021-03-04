import { forwardRef, useContext } from 'react';
import { BsChevronRight } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import { Box, Heading, Icon, Text } from '@chakra-ui/react';

import { BackBtn, Container } from '../../../components';
import type { DivRef } from './index';
import { StepFormContext } from './index';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const Invest = forwardRef<DivRef, stepProps>(({ nextStep, prevStep }: stepProps, ref) => {
  const form = useContext(StepFormContext);
  const history = useHistory();

  return (
    <div ref={ref}>
      <Container>
        <BackBtn handleClick={prevStep} />
        <Heading size="md" mt={8} mb={2} textAlign="left">
          Do you want to invest as an individual or through an entity?
        </Heading>
        <Box
          px={6}
          py={3}
          mt={8}
          textAlign="left"
          cursor="pointer"
          pos="relative"
          borderRadius="full"
          layerStyle="selectionBox"
          onClick={() => {
            form.dispatch({
              type: 'update-form',
              payload: {
                step5: 'Individual',
              },
            });
            history.push('/investment-profile/result');
          }}
        >
          <Text fontSize="md" colorScheme="gray" variant="colored">
            Individual account
          </Text>
          <Text fontSize="sm" colorScheme="gray" variant="colored">
            Lorem ipsum dolor sir amet
          </Text>
          <Icon
            pos="absolute"
            top="50%"
            right={4}
            transform="translateY(-50%)"
            as={BsChevronRight}
          />
        </Box>
        <Box
          px={6}
          py={3}
          mt={2}
          textAlign="left"
          cursor="pointer"
          pos="relative"
          borderRadius="full"
          layerStyle="selectionBox"
          onClick={() => {
            form.dispatch({
              type: 'update-form',
              payload: {
                step5: 'Entity',
              },
            });
            nextStep();
          }}
        >
          <Text fontSize="md" colorScheme="gray" variant="colored">
            Entity account
          </Text>
          <Text fontSize="sm" colorScheme="gray" variant="colored">
            Lorem ipsum dolor sir amet
          </Text>
          <Icon
            pos="absolute"
            top="50%"
            right={4}
            transform="translateY(-50%)"
            as={BsChevronRight}
          />
        </Box>
      </Container>
    </div>
  );
});
