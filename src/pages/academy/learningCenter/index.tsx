import { useState } from 'react';
import { Container } from '../../../components';
import { Glossary } from './glossary';
import { LearningTabs } from './learningTabs';

function LearningCenter () {
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
}

// eslint-disable-next-line import/no-default-export
export default LearningCenter;
