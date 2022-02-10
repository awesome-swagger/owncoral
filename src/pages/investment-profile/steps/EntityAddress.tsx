import React, { Fragment, useCallback, useContext, useEffect, useState } from 'react';
import { Box, Input, Text } from '@chakra-ui/react';

import { BackBtn, Container, Option, SlideContainer, SubmitBtn } from '../../../components';
import { Title2 } from '../../../components/text';
import { getFormattedAddress, usePlacesAutocomplete } from '../../../lib/useMapboxAutoComplete';
import type { StepPropsT } from '../index';
import { InvestmentProfileContext } from '../index';

type AddressPropsT = {
  Apt: string;
  City: string;
  State: string;
  PostalCode: string;
};

export const EntityAddress:React.FC<StepPropsT> = ({ nextStep, prevStep }) => {
  const {
    value,
    setValue,
    suggestions,
    clearSuggestions,
  } = usePlacesAutocomplete({ debounce: 1000 });

  const form = useContext(InvestmentProfileContext);

  const [formattedAddress, setFormattedAddress] = useState<AddressPropsT | null>(null);

  useEffect(() => {
    const formState = form.formState;

    setValue(formState?.step10 || '', false);

    handleFormattedAddress(formState?.step10);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const handleFormattedAddress = async (address: string) => {
    if (address.trim() !== "") {
      const data = await getFormattedAddress(address);
      setFormattedAddress(data);
    }
  };

  const handleSelect = (description: string) => {
    setValue(description, false);
    clearSuggestions();
    handleFormattedAddress(description);
  }

  const handleSubmit = () => {
    if (formattedAddress) {
      form.dispatch?.({ step10: Object.values(formattedAddress).join(', ') });
      nextStep()
    }
  }

  return (
    <Container>
      <SlideContainer>
        <Box w="100%">
          <BackBtn handleClick={prevStep} />
          <Title2 mt={8} mb={2}>
            What’s your Entity address?
          </Title2>
          <Text textStyle="Body1" mt={8} mb={2}>
            Entity Address
          </Text>
          <Input
            placeholder="Your residential address"
            h={12}
            value={value}
            onChange={handleInput}
          />
            <Box borderRadius="3xl" overflow="hidden" mt={1}>
              {suggestions?.map(({ id: place_id, place_name }) => {
                return (
                  <Option icon={null} key={place_id} onClick={() => handleSelect(place_name)}>
                    <small>{place_name}</small>
                  </Option>
                );
              })}
            </Box>
          {formattedAddress && (
            <Fragment>
              <Text textStyle="Body1" mt={8} mb={2}>
                APARTMENT, SUITE OR UNIT
              </Text>
              <Input
                placeholder="Apt, Suite or Unit"
                h={12}
                value={formattedAddress?.Apt}
                onChange={(e) => setFormattedAddress(address =>
                  address ? {
                    ...address,
                    Apt: e.target.value,
                  } : null
                )}
              />
              <Text textStyle="Body1" mt={6} mb={2}>
                CITY
              </Text>
              <Input
                placeholder="City"
                h={12}
                value={formattedAddress?.City}
                onChange={(e) => setFormattedAddress(address =>
                  address ? {
                    ...address,
                    City: e.target.value,
                  } : null
                )}
              />
              <Text textStyle="Body1" mt={6} mb={2}>
                STATE
              </Text>
              <Input
                placeholder="State"
                h={12}
                value={formattedAddress?.State}
                onChange={(e) => setFormattedAddress(address =>
                  address ? {
                    ...address,
                    State: e.target.value,
                  } : null
                )}
              />
              <Text textStyle="Body1" mt={6} mb={2}>
                POSTAL CODE
              </Text>
              <Input
                placeholder="Postal code"
                h={12}
                mb={6}
                value={formattedAddress?.PostalCode}
                onChange={(e) => setFormattedAddress(address =>
                  address ? {
                    ...address,
                    PostalCode: e.target.value,
                  } : null
                )}
              />
            </Fragment>
          )}
        </Box>
        <SubmitBtn
          label="Continue"
          disabled={!formattedAddress}
          onClick={handleSubmit}
        />
      </SlideContainer>
    </Container>
  );
}
