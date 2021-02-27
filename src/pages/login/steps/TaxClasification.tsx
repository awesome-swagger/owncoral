import { forwardRef, useContext } from 'react';
import { Heading, Box, Text, Image } from '@chakra-ui/react';
import { BackBtn, Container } from '../../../components';
import Chevron from '../../../assets/chevron.png';
import type { DivRef } from './index';
import { StepFormContext } from './index';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

const EntityType = [
  {
    value: 'Partnership',
  },
  { value: 'S Coporation' },
  { value: 'C Corporation' },
];
export const TaxClasification = forwardRef<DivRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    const form = useContext(StepFormContext);

    return (
      <div ref={ref}>
        <Container>
          <BackBtn handleClick={prevStep} />
          <Heading size="md" mt="2rem" mb="0.5rem" textAlign="left" letterSpacing="normal">
            Which type of Tax Clasification?
          </Heading>
          <Text fontSize="1rem" textAlign="left" mb="2rem">
            Lorem ipsum dolor sir amet
          </Text>
          {EntityType.map(({ value }) => (
            <Box
              px="1.5rem"
              py="0.75rem"
              mt="0.5rem"
              bg="#F3F3F3"
              color="4E504F"
              textAlign="left"
              cursor="pointer"
              pos="relative"
              key="value"
              onClick={() => {
                form.dispatch({
                  type: 'update-form',
                  payload: {
                    step8: { tax_clasification: value },
                  },
                });
                nextStep();
              }}
            >
              {value}
              <Image
                pos="absolute"
                top="50%"
                right="1rem"
                transform="translateY(-50%) rotate(180deg)"
                src={Chevron}
              />
            </Box>
          ))}
        </Container>
      </div>
    );
  },
);
