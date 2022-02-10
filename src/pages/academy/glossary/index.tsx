import { Fragment, useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { Box, Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import * as R from 'remeda';

import { Option, OptionGroup } from '../../../components';
import { Headline, Overline, Title2 } from '../../../components/text';
import { GlossaryUrl } from '../../../lib/uriConstants';
import { titleToUrlFragment } from '../lib';
import { GlossaryData } from './GlossaryData';

export const Glossary = () => {
  const history = useHistory();
  const [searchValue, setSearchValue] = useState('');
  let entriesGroupedByFirstLetter = R.toPairs(
    R.groupBy(
      GlossaryData.filter(
        (val) =>
          searchValue === '' ||
          val.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()),
      ),
      (val) => val.name.charAt(0),
    ),
  );
  entriesGroupedByFirstLetter = R.sortBy(
    entriesGroupedByFirstLetter,
    ([firstLetter]) => firstLetter,
  );

  const searchResults =
    entriesGroupedByFirstLetter.length === 0 ? (
      <Box textAlign="center" mt={12}>
        <Title2>Ooops!</Title2>
        <Headline>Sorry, there is no result that fit with your search</Headline>
      </Box>
    ) : (
      entriesGroupedByFirstLetter.map(([firstLetter, entries], index) => (
        <Fragment key={index}>
          <Overline ml={3} mb={2} mt={3}>
            {firstLetter}
          </Overline>
          <OptionGroup>
            {entries.map(({ name }, index) => (
              <Option
                key={`option-${index}`}
                onClick={() => history.push(`${GlossaryUrl}/${titleToUrlFragment(name)}`)}
                className="option"
              >
                {name}
              </Option>
            ))}
          </OptionGroup>
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
      <InputGroup mt={4} mb={4}>
        <InputLeftElement>
          <Icon as={FiSearch} />
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
