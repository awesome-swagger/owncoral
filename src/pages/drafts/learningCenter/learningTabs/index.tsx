import type React from 'react';
import { Box, Tab, Tabs, TabList, TabPanels, TabPanel } from '@chakra-ui/react';
import { GlossaryTab } from '../glossaryTab';
import { H4 } from '../../../../components/text';

export const LearningTabs = ({
  handleGlossary,
}: {
  handleGlossary: React.Dispatch<React.SetStateAction<any>>;
}) => (
  <Box>
    <H4>Learning</H4>
    <Tabs defaultIndex={1}>
      <TabList>
        <Tab>Crash Courses</Tab>
        <Tab>Glossary</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <H4>Crash Courses</H4>
        </TabPanel>
        <TabPanel>
          <GlossaryTab handleGlossary={handleGlossary} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Box>
);
