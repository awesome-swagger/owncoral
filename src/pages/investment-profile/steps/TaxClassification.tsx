import { forwardRef, useContext } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Box, Icon, Text } from '@chakra-ui/react';

import { BackBtn, Container, SelectBox } from '../../../components';
import { Title1 } from '../../../components/text';
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
  { value: 'S Corporation' },
  { value: 'C Corporation' },
];
export const TaxClassification = forwardRef<DivRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    const form = useContext(StepFormContext);

    const handleClick = (value: string) => {
      form.dispatch({
        type: 'update-form',
        payload: {
          step8: { tax_classification: value },
        },
      });
      nextStep();
    };

    return (
      <div ref={ref}>
        <Container>
          <BackBtn handleClick={prevStep} />
          <Title1 mt={8} mb={2} textAlign="left">
            Which type of Tax Classification?
          </Title1>
          <Text fontSize="md" textAlign="left" mb={8}>
            Lorem ipsum dolor sir amet
          </Text>
          {EntityType.map(({ value }, idx) => (
            <SelectBox
              key={idx}
              icon="chevron"
              value={value}
              handleClick={() => handleClick(value)}
              state={form?.formState?.step8?.tax_classification}
            />
          ))}
        </Container>
      </div>
    );
  },
);
