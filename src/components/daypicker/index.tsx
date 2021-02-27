import type React from 'react';
import { Flex, Input, Select, Spacer } from '@chakra-ui/react';
import InputMask from 'react-input-mask';

type DayPickerProps = {
  date: {
    day: string;
    month: string;
    year: string;
  };
  onChange: (newDate: { [key: string]: string }) => void;
};

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
        mt={8}
        size="lg"
        colorScheme="gray"
        borderRadius="full"
        placeholder="Month"
        variant="filled"
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
      <Input
        as={InputMask}
        w="25%"
        size="lg"
        className="mask_input"
        placeholder="Day"
        mask="99"
        colorScheme="gray"
        variant="filled"
        value={date.day}
        onChange={(e) => onChange({ day: e.target.value })}
      />
      <Spacer />
      <Input
        as={InputMask}
        w="30%"
        size="lg"
        className="mask_input"
        placeholder="Year"
        mask="9999"
        colorScheme="gray"
        variant="filled"
        value={date.year}
        onChange={(e) => onChange({ year: e.target.value })}
      />
    </Flex>
  );
};
