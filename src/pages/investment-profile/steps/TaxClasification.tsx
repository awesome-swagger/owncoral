import { forwardRef, useContext } from 'react';
import { Box, Icon } from '@chakra-ui/react';
import { BsChevronRight } from 'react-icons/bs';
import { BackBtn, Container, HeadingTypography, TextTypography } from '../../../components';
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
          <HeadingTypography size="md" mt={8} mb={2} textAlign="left">
            Which type of Tax Clasification?
          </HeadingTypography>
          <TextTypography fontSize="md" textAlign="left" mb={8}>
            Lorem ipsum dolor sir amet
          </TextTypography>
          {EntityType.map(({ value }) => (
            <Box
              px={6}
              py={3}
              mt={2}
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
