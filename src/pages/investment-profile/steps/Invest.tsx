import { forwardRef, useContext, useEffect, useCallback } from 'react';
import { Box, Icon } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { BackBtn, Container, HeadingTypography, TextTypography } from '../../../components';
import { StepFormContext } from '.';
import type { DivRef } from '.';
import { BsChevronRight } from 'react-icons/bs';

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
        <HeadingTypography size="md" mt={8} mb={2} textAlign="left">
          Do you want to invest as an individual or through an entity?
        </HeadingTypography>
        <Box
          px={6}
          py={3}
          mt={8}
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
            history.push('/investment-profile/result');
          }}
        >
          <TextTypography fontSize="md" color="#4E504F">
            Individual account
          </TextTypography>
          <TextTypography fontSize="sm" color="#888">
            Lorem ipsum dolor sir amet
          </TextTypography>
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
          <TextTypography fontSize="md" color="#4E504F">
            Entity account
          </TextTypography>
          <TextTypography fontSize="sm" color="#888">
            Lorem ipsum dolor sir amet
          </TextTypography>
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
