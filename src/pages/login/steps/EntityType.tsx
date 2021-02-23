import { forwardRef, useContext } from 'react';
import { StepFormContext } from '../steps';
import { Heading, Box, Text, Image } from '@chakra-ui/react';
import { Container } from '../../../components/container';
import { BackBtn } from '../../../components/backBtn';
import Chevron from '../../../assets/chevron.png';
import type { DivRef } from '../steps';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};
const Types = [
  {
    value: 'LLC, Single-Member LLC',
  },
  { value: 'S Coporation' },
  { value: 'Limited Partnership' },
  { value: 'C Corporation' },
];
export const EntityType = forwardRef<DivRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    const form = useContext(StepFormContext);

    return (
      <div ref={ref}>
        <Container>
          <BackBtn handleClick={prevStep} />
          <Heading size="md" mt="32px" mb="8px" textAlign="left" letterSpacing="normal">
            Which Entity type is?
          </Heading>
          <Text fontSize="1rem" textAlign="left" mb="32px">
            Lorem ipsum dolor sir amet
          </Text>
          {Types.map(({ value }) => (
            <Box
              px="24px"
              py="12px"
              mt="8px"
              bg="#F3F3F3"
              color="4E504F"
              textAlign="left"
              cursor="pointer"
              pos="relative"
              key={value}
              onClick={() => {
                form.dispatch({
                  type: 'update-form',
                  payload: {
                    step7: { entity_type: value },
                  },
                });
                nextStep();
              }}
            >
              {value}
              <Image
                pos="absolute"
                top="50%"
                right="16px"
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
