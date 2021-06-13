import React, { useState } from 'react';
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

import { Container } from '../../components';
import { Title1 } from '../../components/text';
import ComingSoon from '../coming-soon';
import { Glossary } from './glossary';
import { GlossaryTab } from './glossary/GlossaryTab';

function Academy() {
  const [glossaryData, setGlossaryData] = useState<any>(null);

  return (
    <Container>
      {glossaryData ? (
        <Glossary data={glossaryData} handleGlossary={setGlossaryData} />
      ) : (
        <AcademyTabs handleGlossary={setGlossaryData} />
      )}
    </Container>
  );
}

const AcademyTabs = ({
  handleGlossary,
}: {
  handleGlossary: React.Dispatch<React.SetStateAction<any>>;
}) => (
  <Box>
    <Title1 my={4}> Academy </Title1>
    <Tabs defaultIndex={1}>
      <TabList>
        <Tab>Crash Courses</Tab>
        <Tab>Glossary</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <ComingSoon isPage={false} />
        </TabPanel>
        <TabPanel>
          <GlossaryTab handleGlossary={handleGlossary} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Box>
);

// eslint-disable-next-line import/no-default-export
export default Academy;
