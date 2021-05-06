import { useState } from 'react';
import { Container } from '../../../components';
import { LearningTabs } from './learningTabs';
import { Glossary } from './glossary';

export const LearningCenter = () => {
  const [glossaryData, setGlossaryData] = useState<any>(null);

  return (
    <Container>
      {glossaryData ? (
        <Glossary data={glossaryData} handleGlossary={setGlossaryData} />
      ) : (
        <LearningTabs handleGlossary={setGlossaryData} />
      )}
    </Container>
  );
};
