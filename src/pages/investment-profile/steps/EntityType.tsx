import { forwardRef, useContext } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Box, Heading, Icon, Text, useColorModeValue } from '@chakra-ui/react';

import { BackBtn, Container } from '../../../components';
import type { DivRef } from './index';
import { StepFormContext } from './index';

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
          <Heading size="md" mt={8} mb={2} textAlign="left">
            Which Entity type is?
          </Heading>
          <Text fontSize="md" textAlign="left" mb={8}>
            Lorem ipsum dolor sir amet
          </Text>
          {Types.map(({ value }) => (
            <Box
              px={6}
              py={3}
              mt={2}
              textAlign="left"
              cursor="pointer"
              pos="relative"
              key={value}
              layerStyle={
                value === form?.formState?.step7?.entity_type
                  ? 'selectionBox.selected'
                  : 'selectionBox'
              }
              borderRadius="full"
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
              <Icon
                pos="absolute"
                top="50%"
                right={4}
                transform="translateY(-50%)"
                as={FiChevronRight}
              />
            </Box>
          ))}
        </Container>
      </div>
    );
  },
);
