import type React from 'react';
import { Flex, Input, Select, Spacer } from '@chakra-ui/react';

export type SplitDateT = {
  day: string;
  month: string;
  year: string;
};
type DayPickerProps = {
  date: SplitDateT;
  onChange: (newDate: Partial<SplitDateT>) => void;
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

export const DayPicker: React.FC<DayPickerProps> = ({ date, onChange }) => {
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
        onChange={(e: any) => onChange({ day: e.target.value })}
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
        onChange={(e: any) => onChange({ year: e.target.value })}
      />
    </Flex>
  );
};
