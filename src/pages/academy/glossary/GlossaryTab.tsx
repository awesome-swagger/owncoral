import React, { useState, useEffect, Fragment } from 'react';
import { Box, Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Headline, Title3 } from '../../../components/text';
import { GlossaryData } from '../../../lib/glossaryData';
import { useHistory } from 'react-router-dom';
import { Option } from '../../../components';
import { BsSearch } from 'react-icons/bs';

import './style.css';

export const GlossaryTab = () => {
  const history = useHistory();
  const [searchValue, setSearchValue] = useState('');
  const FilteredValue = GlossaryData.filter(
    (val) =>
      searchValue === '' || val.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()),
  );
  let firstLetter = '';

  const searchResults =
    FilteredValue.length === 0 ? (
      <Box textAlign="center" mt={12}>
        <Title3>Ooops!</Title3>
        <Headline>Sorry, there is no result that fit with your search</Headline>
      </Box>
    ) : (
      FilteredValue.map((
        val: any,
        index: Number, // eslint-disable-line no-return-assign
      ) => (
        <Fragment key={`${index}`}>
          {val.name.charAt(0) !== firstLetter && (
            <Headline className="title" my={4}>
              {((firstLetter = val.name.charAt(0)), firstLetter)}
            </Headline>
          )}
          <Option
            key={`option-${index}`}
            onClick={() => history.push(`/academy/${val.name}`)}
            className="option"
          >
            {val.name}
          </Option>
        </Fragment>
      ))
    );

  useEffect(() => {
    let titles = document.getElementsByClassName('title');
    for (let title of titles) {
      const classNames = title.previousElementSibling?.getAttribute('class') + ' last_option';
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
      <Box>{searchResults}</Box>
    </Box>
  );
};
