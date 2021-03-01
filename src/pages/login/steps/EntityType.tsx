import { forwardRef, useContext } from 'react';
import { Box, Icon } from '@chakra-ui/react';
import { BackBtn, Container, HeadingTypography, TextTypography } from '../../../components';
import { BsChevronRight } from 'react-icons/bs';
import type { DivRef } from '../steps';
import { StepFormContext } from '../steps';

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
          <HeadingTypography size="md" mt={8} mb={2} textAlign="left">
            Which Entity type is?
          </HeadingTypography>
          <TextTypography fontSize="md" textAlign="left" mb={8}>
            Lorem ipsum dolor sir amet
          </TextTypography>
          {Types.map(({ value }) => (
            <Box
              px={6}
              py={3}
              mt={2}
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
              <Icon
                pos="absolute"
                top="50%"
                right={4}
                transform="translateY(-50%)"
                as={BsChevronRight}
              />
            </Box>
          ))}
        </Container>
      </div>
    );
  },
);
