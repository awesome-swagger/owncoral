import React, { useState } from 'react';
import { Box, Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { Option } from '../../../../components';
import { H6, SubTitle1 } from '../../../../components/text';
import { GlossaryData } from '../../../../lib/glossaryData';

export const GlossaryTab = ({
  handleGlossary,
}: {
  handleGlossary: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const [searchValue, setSearchValue] = useState('');

  const FilteredValue = GlossaryData.filter((val) => (
    searchValue === '' || val.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  ));

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
              <SubTitle1>{val.name}</SubTitle1>
            </Option>
          ))
        ) : (
          <Box textAlign="center" mt={12}>
            <H6>Ooops!</H6>
            <SubTitle1>Sorry, there is no result that fit with your search</SubTitle1>
          </Box>
        )}
      </Box>
    </Box>
  );
};
