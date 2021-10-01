/* eslint-disable import/no-duplicates */
import type React from 'react';
import type { FocusEvent } from 'react';
import { Flex, Input, Select, Spacer } from '@chakra-ui/react';

export type SplitDateT = {
  day: string;
  month: string;
  year: string;
};
type DayPickerProps = {
  date: SplitDateT;
  onChange: (newDate: Partial<SplitDateT>) => void;
  onBlur?: any;
};

export const months = [
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

export const DayPicker: React.FC<DayPickerProps> = ({ date, onChange, onBlur }) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const currentDate = new Date().getDate();

  return (
    <Flex my={1} maxW="40rem">
      <Select
        w="35%"
        mt={4}
        size="lg"
        colorScheme="gray"
        borderRadius="full"
        placeholder="Month"
        variant="filled"
        value={date.month}
        onBlur={onBlur}
        onChange={(e) =>
          onChange({
            month: e.target.value,
          })
        }
      >
        {months.map((month, idx) => (
          <option value={idx} key={month}>
            {month}
          </option>
        ))}
      </Select>
      <Spacer />
      <Input
        type="tel"
        w="25%"
        size="lg"
        className={
          !Number.isInteger(Number(date.day)) ||
          Number(date.day) > 31 ||
          (currentYear <= Number(date.year) &&
            currentMonth <= Number(date.month) &&
            Number(date.day) > currentDate + 1)
            ? 'mask_input shake_animation'
            : 'mask_input'
        }
        placeholder="DD"
        colorScheme="gray"
        variant="filled"
        value={date.day}
        onBlur={onBlur}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange({ day: e.target.value })}
      />
      <Spacer />
      <Input
        type="tel"
        w="30%"
        size="lg"
        className={
          !Number.isInteger(Number(date.year)) || Number(date.year) > currentYear
            ? 'mask_input shake_animation'
            : 'mask_input '
        }
        placeholder="YYYY"
        colorScheme="gray"
        variant="filled"
        value={date.year}
        onBlur={onBlur}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange({ year: e.target.value })}
      />
    </Flex>
  );
};
