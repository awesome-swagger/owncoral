import { ChangeEvent, forwardRef } from 'react';
import { Heading, Input, Text } from '@chakra-ui/react';
// We're using the verbose default import here to work around a
// bundling bug in Snowpack for this particular package
import { default as usePlacesAutocomplete, getGeocode, getLatLng } from 'use-places-autocomplete';

import { BackBtn, Container, SubmitBtn } from '../../../components';
import type { DivRef } from './index';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const EntityAddress = forwardRef<DivRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    const {
      ready,
      value,
      suggestions: { status, data },
      setValue,
      clearSuggestions,
    } = usePlacesAutocomplete({
      requestOptions: {},
      debounce: 300,
      callbackName: 'initMap',
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
          <Heading size="md" mt={8}>
            What’s your Entity address?
          </Heading>
          <Text fontSize="md" m="0">
            Lorem ipsum dolor sir amet
          </Text>
          <Input
            placeholder="Residental Address"
            h={12}
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
