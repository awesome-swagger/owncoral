import { forwardRef, useContext, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { StepFormContext } from '../steps';
import { BackBtn } from '../../../components/backBtn';
import { Container } from '../../../components/container';
import { Heading, Box, Text, Image } from '@chakra-ui/react';
import Chevron from '../../../assets/chevron.png';
import type { DivRef } from '../steps';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
} & { gotoStep: (step: number) => void };

export const Invest = forwardRef<DivRef, stepProps>(
  ({ gotoStep, nextStep, prevStep }: stepProps, ref) => {
    const form = useContext(StepFormContext);

    return (
      <div ref={ref}>
        <Container>
          <BackBtn handleClick={prevStep} />
          <Heading size="md" mt="32px" mb="8px" textAlign="left" letterSpacing="normal">
            Do you want to invest as an individual or through an entity?
          </Heading>
          <Box
            px="24px"
            py="12px"
            mt="32px"
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
              gotoStep(17);
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
              right="16px"
              transform="translateY(-50%) rotate(180deg)"
              src={Chevron}
            />
          </Box>
          <Box
            px="24px"
            py="12px"
            mt="8px"
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
              right="16px"
              transform="translateY(-50%) rotate(180deg)"
              src={Chevron}
            />
          </Box>
        </Container>
      </div>
    );
  },
);
