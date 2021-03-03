import { forwardRef, useContext, ChangeEvent, ReactNode } from 'react';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import {
  BackBtn,
  Container,
  SubmitBtn,
  HeadingTypography,
  TextTypography,
  InputField,
} from '../../../components';
import type { DivRef } from './index';
import { StepFormContext } from './index';

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
          <HeadingTypography size="md" mt={8}>
            What’s your Entity address?
          </HeadingTypography>
          <TextTypography fontSize="md" m="0">
            Lorem ipsum dolor sir amet
          </TextTypography>
          <InputField
            placeholder="Residental Address"
            h={12}
            bg="#F3F3F3"
            mt={8}
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
