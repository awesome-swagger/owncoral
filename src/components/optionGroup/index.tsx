import React, { Fragment, ReactNode } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Flex, Icon } from '@chakra-ui/react';

// TODO: consolidate with option and use this component
type OptionGroupPropsT = {};
export const OptionGroup: React.FC<OptionGroupPropsT> = ({ children }) => {
  return (
    <Fragment>
      {React.Children.map(children || [], (child) => (
        <Flex
          m="1px 0"
          p={3}
          layerStyle="selectionBox"
          textAlign="left"
          cursor="pointer"
          pos="relative"
          alignItems="center"
          textStyle="BodyText2"
        >
          {child}

          <Icon as={FiChevronRight} h={5} w={5} pos="absolute" right={3} />
        </Flex>
      ))}
    </Fragment>
  );
};
