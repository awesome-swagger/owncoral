import React, { Fragment, useCallback, useContext, useState } from 'react';
import { Text } from '@chakra-ui/react';
import { BackBtn, Container, SelectBox } from '../../../components';
import { Title2 } from '../../../components/text';
import type { StepPropsT } from '../index';
import { InvestmentProfileContext } from '../index';

type EntityTypes = {
  value: string;
  key: string;
  question?: string;
  description?: string;
  subTypes?: string[];
  hasSubpage?: boolean;
}
const entityTypes: Array<EntityTypes> = [
  {
    value: 'Trust',
    key: 'trust',
    hasSubpage: true,
    question: 'Which Trust Type is it?',
    description: 'Lorem ipsum dolor sir amet',
    subTypes: ['Revocable', 'Irrevocable', 'Testamentary'],
  },
  {
    value: 'IRA',
    key: 'ira',
    hasSubpage: true,
    question: 'Which IRA Type is it?',
    description: 'Lorem ipsum dolor sir amet',
    subTypes: ['Traditional IRA', 'ROTH IRA', 'SEP IRA', 'Simple IRA']
  },
  {
    value: 'Corporation',
    key: 'corporation',
    hasSubpage: true,
    question: 'Which Corporation Type is it?',
    description: 'Lorem ipsum dolor sir amet',
    subTypes: ['S Corporation', 'C Corporation']
  },
  {
    value: 'Limited Liability Company',
    key: 'llc',
    hasSubpage: true,
    question: 'Which is the Tax Classification?',
    description: 'Lorem ipsum dolor sir amet',
    subTypes: ['C Corporation', 'S Corporation', 'Partnership']
  },
  {
    value: 'Single-Member LLC',
    key: 'single-llc',
  },
  {
    value: 'Partnership',
    key: 'partnership',
  },
  {
    value: 'Other',
    key: 'other',
  }
];

export const EntityType:React.FC<StepPropsT> = ({ nextStep, prevStep }) => {
  const form = useContext(InvestmentProfileContext);
  const [clickedType, setClickedType] = useState<EntityTypes | undefined>(undefined);

  const handleTypeClick = useCallback((value: string) => {
    form.dispatch?.({ step7: { entity_type: value } });

    const type = entityTypes.find(({ value: entityValue }) => entityValue === value);
    if (type?.hasSubpage) setClickedType(type);
    else nextStep();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubtypeClick = useCallback((key: string, value: string) => {
    form.dispatch?.({
      step7: {
        entity_type: form?.formState?.step7?.entity_type,
        [key]: value
      }
    });
    nextStep(key === 'ira' ? 1 : 0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {!clickedType ? (
        <Fragment>
          <BackBtn handleClick={prevStep} />
          <Title2 mt={8} mb={2} textAlign="left">
            Which Entity type is it?
          </Title2>
          <Text fontSize="md" textAlign="left" mb={8}>
            Lorem ipsum dolor sir amet
          </Text>
          {entityTypes.map(({ value }, idx) => (
            <SelectBox
              key={idx}
              value={value}
              icon="chevron"
              handleClick={() => handleTypeClick(value)}
              state={form?.formState?.step7?.entity_type}
            />
          ))}
        </Fragment>
      ) : (
        <Fragment>
          <BackBtn handleClick={() => setClickedType(undefined)} />
          <Title2 mt={8} mb={2} textAlign="left">
            {clickedType.question}
          </Title2>
          <Text fontSize="md" textAlign="left" mb={8}>
            {clickedType.description}
          </Text>
          {clickedType.subTypes?.map((value: string, idx: number) => (
            <SelectBox
              key={idx}
              value={value}
              icon="chevron"
              handleClick={() => handleSubtypeClick(clickedType.key, value)}
              state={form?.formState?.step7?.[clickedType.key]}
            />
          ))}
        </Fragment>
      )}
    </Container>
  );
}
