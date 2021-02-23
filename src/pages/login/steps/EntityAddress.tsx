import { forwardRef, useContext, ChangeEvent, ReactNode } from 'react';
import { StepFormContext } from '../steps';
import { Heading, Input, Text, Button } from '@chakra-ui/react';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import { Container } from '../../../components/container';
import { BackBtn } from '../../../components/backBtn';
import type { DivRef } from '../steps';
import { SubmitBtn } from '../../../components/submitBtn';
import { useForm } from 'react-hook-form';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const EntityAddress = forwardRef<DivRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    const form = useContext(StepFormContext);
    const {
      ready,
      value,
      suggestions: { status, data },
      setValue,
      clearSuggestions,
    } = usePlacesAutocomplete({
      requestOptions: {},
      debounce: 300,
    });
    const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
      setValue(e.target.value);
    };

    const handleSelect = ({ description }: any) => () => {
      setValue(description, false);
      clearSuggestions();
      getGeocode({ address: description })
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => {
          console.log('📍 Coordinates: ', { lat, lng });
        })
        .catch((error) => {
          console.log('😱 Error: ', error);
        });
    };
    const renderSuggestions = () =>
      data.map((suggestion) => {
        const {
          place_id,
          structured_formatting: { main_text, secondary_text },
        } = suggestion;

        return (
          <li key={place_id} onClick={() => handleSelect(suggestion)}>
            <strong>{main_text}</strong> <small>{secondary_text}</small>
          </li>
        );
      });
    return (
      <div ref={ref}>
        <Container>
          <BackBtn handleClick={prevStep} />
          <Heading size="md" mt="32px" letterSpacing="normal">
            What’s your Entity address?
          </Heading>
          <Text fontSize="1rem" m="0 !important">
            Lorem ipsum dolor sir amet
          </Text>
          <Input
            placeholder="Residental Address"
            h="48px"
            bg="#F3F3F3"
            mt="32px"
            value={value}
            onChange={handleInput}
            disabled={!ready}
          />
          {status === 'OK' && <ul>{renderSuggestions()}</ul>}
          <SubmitBtn label="Continue" />
        </Container>
      </div>
    );
  },
);
