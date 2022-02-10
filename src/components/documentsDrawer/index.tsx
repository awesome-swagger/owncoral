import { useMemo } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
} from '@chakra-ui/react';

import { Title1 } from '../text';
import { Option, OptionGroup } from '../../components';

const DOC_NAME_REGEXP = /.*\/docs\/(.*)\..*\?/;

export type DocumentsDrawerPropT = {
  isOpen: boolean;
  onToggle: () => void;
  documents: string[];
};
export const DocumentsDrawer = ({ isOpen, onToggle, documents }: DocumentsDrawerPropT) => {
  return (
    <Drawer preserveScrollBarGap={false} isOpen={isOpen} placement="bottom" onClose={onToggle}>
      <DrawerOverlay />
      <DrawerContent
        borderTopRadius={15}
        height={`calc(${0.98 * window.innerHeight}px - env(safe-area-inset-top))`}
        paddingLeft="env(safe-area-inset-left)"
        paddingRight="env(safe-area-inset-right)"
      >
        <DrawerHeader>
          <Flex flexDirection="row" justifyContent="space-between" alignItems="center" width="100%">
            <DrawerCloseButton size="sm" position="inherit" />
          </Flex>
        </DrawerHeader>

        <DrawerBody>
          <Title1 ml={3} mb={4}>
            Documents
          </Title1>
          <OptionGroup>
            {documents.map((url, index) => (
              <DocumentOption key={index} url={url} />
            ))}
          </OptionGroup>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

const DocumentOption = ({ url }: { url: string }) => {
  const name = useMemo(() => {
    const [_, fileMatch] = url.match(DOC_NAME_REGEXP) || [];
    return fileMatch ? decodeURIComponent(fileMatch) : null;
  }, [url]);

  if (!name) return null;

  return <Option onClick={() => window.open(url, '_blank')}>{name}</Option>;
};
