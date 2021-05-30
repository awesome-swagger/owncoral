import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Box, Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

import { Option } from '../../../../components';
import { Headline,Title3 } from '../../../../components/text';
import { GlossaryData } from '../../../../lib/glossaryData';

export const GlossaryTab = ({
  handleGlossary,
}: {
  handleGlossary: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const [searchValue, setSearchValue] = useState('');

  const FilteredValue = GlossaryData.filter(
    (val) =>
      searchValue === '' || val.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()),
  );

  return (
    <Box>
      <InputGroup>
        <InputLeftElement>
          <Icon as={BsSearch} />
        </InputLeftElement>
        <Input
          placeholder="Search..."
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
      </InputGroup>
      <Box h="100%">
        {FilteredValue.length !== 0 ? (
          FilteredValue.map((val: any, index: Number) => (
            <Option key={`option-${index}`} onClick={() => handleGlossary(val)}>
              <Headline>{val.name}</Headline>
            </Option>
          ))
        ) : (
          <Box textAlign="center" mt={12}>
            <Title3>Ooops!</Title3>
            <Headline>Sorry, there is no result that fit with your search</Headline>
          </Box>
        )}
      </Box>
    </Box>
  );
};
