import React, { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Box, Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

import { Option } from '../../../../components';
import { Headline, Title3 } from '../../../../components/text';
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
  let firstLetter = '';

  const sortedValue =
    FilteredValue.length !== 0 ? (
      FilteredValue.map((val: any, index: Number) => {
        const name = val.name;
        return (
          <>
            {name.charAt(0) != firstLetter ? (
              <Headline className="title" my={4}>
                {((firstLetter = name.charAt(0)), firstLetter)}
              </Headline>
            ) : (
              ''
            )}
            <Option key={`option-${index}`} onClick={() => handleGlossary(val)} className="option">
              {name}
            </Option>
          </>
        );
      })
    ) : (
      <Box textAlign="center" mt={12}>
        <Title3>Ooops!</Title3>
        <Headline>Sorry, there is no result that fit with your search</Headline>
      </Box>
    );

  useEffect(() => {
    let titles = document.getElementsByClassName('title');
    for (let i = 0; i < titles.length; i++) {
      let title = titles[i];
      const classNames = title.previousElementSibling?.getAttribute('class') + ' ' + ' last_option';
      title.previousElementSibling?.setAttribute('class', classNames);
    }
  }, [searchValue]);

  return (
    <Box>
      <InputGroup mt={4}>
        <InputLeftElement>
          <Icon as={BsSearch} />
        </InputLeftElement>
        <Input
          placeholder="Search..."
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
      </InputGroup>
      <Box>{sortedValue}</Box>
    </Box>
  );
};
