import { forwardRef, useContext, useEffect, useCallback } from 'react';
import { Heading, Box, Text, Image } from '@chakra-ui/react';
import { BackBtn } from '../../../components/backBtn';
import { Container } from '../../../components/container';
import { useHistory } from 'react-router-dom';
import Chevron from '../../../assets/chevron.png';
import { StepFormContext } from '../steps';
import type { DivRef } from '../steps';

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
        <Heading size="md" mt="2rem" mb="0.5rem" textAlign="left" letterSpacing="normal">
          Do you want to invest as an individual or through an entity?
        </Heading>
        <Box
          px="1.5rem"
          py="0.75rem"
          mt="2rem"
          bg="#F3F3F3"
          color="4E504F"
          textAlign="left"
          cursor="pointer"
          pos="relative"
          onClick={() => {
            form.dispatch({
              type: 'update-form',
              payload: {
                step5: 'Individual',
              },
            });
            history.push('/login/result');
          }}
        >
          <Text fontSize="1rem" color="#4E504F">
            Individual account
          </Text>
          <Text fontSize="0.85rem" color="#888">
            Lorem ipsum dolor sir amet
          </Text>
          <Image
            pos="absolute"
            top="50%"
            right="1rem"
            transform="translateY(-50%) rotate(180deg)"
            src={Chevron}
          />
        </Box>
        <Box
          px="1.5rem"
          py="0.75rem"
          mt="0.5rem"
          bg="#F3F3F3"
          color="4E504F"
          textAlign="left"
          cursor="pointer"
          pos="relative"
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
          <Text fontSize="1rem" color="#4E504F">
            Entity account
          </Text>
          <Text fontSize="0.85rem" color="#888">
            Lorem ipsum dolor sir amet
          </Text>
          <Image
            pos="absolute"
            top="50%"
            right="1rem"
            transform="translateY(-50%) rotate(180deg)"
            src={Chevron}
          />
        </Box>
      </Container>
    </div>
  );
});
