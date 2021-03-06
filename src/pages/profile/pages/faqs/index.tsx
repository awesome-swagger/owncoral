import type React from 'react';
import {
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useColorModeValue,
} from '@chakra-ui/react';
import { BackBtn } from '../../../../components';

export const Faqs = ({ goBack }: { goBack: () => void }) => {
  const bgColor = useColorModeValue('gray.100', 'whiteAlpha.100');
  const hover = useColorModeValue({ bg: 'primary.100' }, { bg: 'secondary.800' });
  return (
    <Box>
      <BackBtn handleClick={goBack} pos="absolute" />
      <Heading mb={8} mt="0" mx="0" fontSize="lg" align="center">
        FAQ
      </Heading>
      <Accordion allowToggle>
        <AccordionItem bg={bgColor} _hover={hover}>
          <AccordionButton>
            <Heading fontSize="sm">Lorem ipsum dolor sir amet?</Heading>
            <AccordionIcon ml="auto" />
          </AccordionButton>
          <AccordionPanel pt={4}>
            <Heading fontSize="sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam suscipit facilis
              porro officiis commodi tempore architecto reiciendis. Tenetur aliquid exercitationem
              tempore ratione voluptates maxime! Maxime quidem similique harum id unde. Itaque,
              quae. Molestiae quos eveniet nam nostrum voluptatem neque quo illo corrupti vel
              accusantium enim, iure tenetur ratione et.
            </Heading>
          </AccordionPanel>
        </AccordionItem>

        <Box bg="gray.300" p=".5px" />
        <AccordionItem bg={bgColor} _hover={hover}>
          <AccordionButton>
            <Heading fontSize="sm">Lorem ipsum dolor sir amet?</Heading>
            <AccordionIcon ml="auto" />
          </AccordionButton>
          <AccordionPanel pt={4}>
            <Heading fontSize="sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam suscipit facilis
              porro officiis commodi tempore architecto reiciendis. Tenetur aliquid exercitationem
              tempore ratione voluptates maxime! Maxime quidem similique harum id unde. Itaque,
              quae. Molestiae quos eveniet nam nostrum voluptatem neque quo illo corrupti vel
              accusantium enim, iure tenetur ratione et.
            </Heading>
          </AccordionPanel>
        </AccordionItem>

        <Box bg="gray.300" p=".5px" />
        <AccordionItem bg={bgColor} _hover={hover}>
          <AccordionButton>
            <Heading fontSize="sm">Lorem ipsum dolor sir amet?</Heading>
            <AccordionIcon ml="auto" />
          </AccordionButton>
          <AccordionPanel pt={4}>
            <Heading fontSize="sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam suscipit facilis
              porro officiis commodi tempore architecto reiciendis. Tenetur aliquid exercitationem
              tempore ratione voluptates maxime! Maxime quidem similique harum id unde. Itaque,
              quae. Molestiae quos eveniet nam nostrum voluptatem neque quo illo corrupti vel
              accusantium enim, iure tenetur ratione et.
            </Heading>
          </AccordionPanel>
        </AccordionItem>

        <Box bg="gray.300" p=".5px" />
        <AccordionItem bg={bgColor} _hover={hover}>
          <AccordionButton>
            <Heading fontSize="sm">Lorem ipsum dolor sir amet?</Heading>
            <AccordionIcon ml="auto" />
          </AccordionButton>
          <AccordionPanel pt={4}>
            <Heading fontSize="sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam suscipit facilis
              porro officiis commodi tempore architecto reiciendis. Tenetur aliquid exercitationem
              tempore ratione voluptates maxime! Maxime quidem similique harum id unde. Itaque,
              quae. Molestiae quos eveniet nam nostrum voluptatem neque quo illo corrupti vel
              accusantium enim, iure tenetur ratione et.
            </Heading>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};
