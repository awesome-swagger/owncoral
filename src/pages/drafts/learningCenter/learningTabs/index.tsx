import type React from 'react';
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

import { Title1 } from '../../../../components/text';
import { GlossaryTab } from '../glossaryTab';

export const LearningTabs = ({
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
          <Title1>Crash Courses</Title1>
        </TabPanel>
        <TabPanel>
          <GlossaryTab handleGlossary={handleGlossary} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Box>
);
