import { useState } from 'react';
import { Flex, Icon, Heading } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { CgOptions } from 'react-icons/cg';
import { IoMdClose } from 'react-icons/io';
import { Container, BackBtn } from '../../../../components';
import { TotalDistribution, TopRankingProperties, CashFlow } from './sections';
import { PopUpBox } from './popUpBox';

export const PortfolioDashboard = () => {
  const [popUp, setPopUp] = useState(false);
  const [filter, setFilter] = useState<string[]>([]);
  const history = useHistory();

  return (
    <Container>
      <Flex justifyContent="center">
        <BackBtn handleClick={() => history.goBack()} pos="absolute" left={4} />
        <Heading fontSize="lg">Dashboard</Heading>
      </Flex>
      <Flex>
        <Heading
          borderRadius="full"
          display="inline-block"
          cursor="pointer"
          fontSize="sm"
          border="1px"
          mr={2}
          py={2}
          px={3}
          onClick={() => setPopUp(true)}
          layerStyle="lightBorder"
          whiteSpace="nowrap"
        >
          <Icon as={CgOptions} h={4} w={4} mr={filter.length === 0 ? 2 : 0} />
          {filter.length === 0 ? 'All properties' : ''}
        </Heading>
        {filter.map((value, index) => (
          <Heading
            key={index}
            borderRadius="full"
            display="inline-block"
            cursor="pointer"
            fontSize="sm"
            mr={2}
            py={2}
            px={3}
            layerStyle="card"
            whiteSpace="nowrap"
          >
            {value}
            <Icon
              as={IoMdClose}
              h={4}
              w={4}
              ml={1}
              onClick={() => setFilter((prevState) => prevState.filter((x) => x !== value))}
            />
          </Heading>
        ))}
      </Flex>
      <TotalDistribution />
      <TopRankingProperties />
      <CashFlow />
      {popUp && <PopUpBox handleClose={setPopUp} handleFilter={setFilter} filters={filter} />}
    </Container>
  );
};
