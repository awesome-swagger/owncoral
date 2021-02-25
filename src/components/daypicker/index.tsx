// @ts-nocheck
import React, { useState } from 'react';
import { Select, Box, Flex, Spacer } from '@chakra-ui/react';
import InputMask from 'react-input-mask';

interface DayPickerProps {
  date: {
    day: string;
    month: string;
    year: string;
  };
  onChange: (newDate: { [key: string]: string }) => void;
}

export const DayPicker: React.FC<DayPickerProps> = ({ date, onChange }) => {
  const monthMap = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  return (
    <Flex m="1rem 0" maxW="40rem">
      <Select
        w="35%"
        mt="2rem"
        h="3rem"
        background="#f3f3f3"
        borderRadius="1.5rem"
        placeholder="Month"
        value={date.month}
        onChange={(e) => onChange({ month: e.target.value })}
      >
        {monthMap.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </Select>
      <Spacer />
      <Box w="25%">
        <InputMask
          className="mask_input"
          placeholder="Day"
          mask="99"
          value={date.day}
          onChange={(e) => onChange({ day: e.target.value })}
        />
      </Box>
      <Spacer />
      <Box w="30%">
        <InputMask
          className="mask_input"
          placeholder="Year"
          mask="9999"
          value={date.year}
          onChange={(e) => onChange({ year: e.target.value })}
        />
      </Box>
    </Flex>
  );
};
