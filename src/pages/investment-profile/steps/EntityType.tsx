import { forwardRef, useContext } from 'react';
import { Text } from '@chakra-ui/react';

import { BackBtn, Container, SelectBox } from '../../../components';
import { Title1 } from '../../../components/text';
import type { DivRef } from './index';
import { StepFormContext } from './index';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};
const Types = [
  { value: 'LLC, Single-Member LLC' },
  { value: 'S Coporation' },
  { value: 'Limited Partnership' },
  { value: 'C Corporation' },
];

export const EntityType = forwardRef<DivRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    const form = useContext(StepFormContext);

    const handleClick = (value: string) => {
      form.dispatch({
        type: 'update-form',
        payload: {
          step7: { entity_type: value },
        },
      });
      nextStep();
    };

    return (
      <div ref={ref}>
        <Container>
          <BackBtn handleClick={prevStep} />
          <Title1 mt={8} mb={2} textAlign="left">
            Which Entity type is?
          </Title1>
          <Text fontSize="md" textAlign="left" mb={8}>
            Lorem ipsum dolor sir amet
          </Text>
          {Types.map(({ value }, idx) => (
            <SelectBox
              key={idx}
              value={value}
              icon="chevron"
              handleClick={() => handleClick(value)}
              state={form?.formState?.step7?.entity_type}
            />
          ))}
        </Container>
      </div>
    );
  },
);
