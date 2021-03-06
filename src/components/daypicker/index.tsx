import type React from 'react';
import InputMask from 'react-input-mask';
import { Flex, Input, Select, Spacer } from '@chakra-ui/react';

type DayPickerProps = {
  date: {
    day: string;
    month: string;
    year: string;
  };
  onChange: (newDate: { [key: string]: string }) => void;
};

export const monthMap = [
  { text: 'Jan', no: 0 },
  { text: 'Feb', no: 1 },
  { text: 'Mar', no: 2 },
  { text: 'Apr', no: 3 },
  { text: 'May', no: 4 },
  { text: 'Jun', no: 5 },
  { text: 'Jul', no: 6 },
  { text: 'Aug', no: 7 },
  { text: 'Sep', no: 8 },
  { text: 'Oct', no: 9 },
  { text: 'Nov', no: 10 },
  { text: 'Dec', no: 11 },
];

export const DayPicker: React.FC<DayPickerProps> = ({ date, onChange }) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const currentDate = new Date().getDate();

  return (
    <Flex my={1} maxW="40rem">
      <Select
        w="35%"
        mt={8}
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
        fontFamily="monospace"
      >
        {monthMap.map((value) => (
          <option value={value.no} key={value.text}>
            {value.text}
          </option>
        ))}
      </Select>
      <Spacer />
      <Input
        type="tel"
        as={InputMask}
        w="25%"
        size="lg"
        className={
          Number(date.day) > 31
            ? 'mask_input shake_animation'
            : currentYear <= Number(date.year) &&
              currentMonth <= Number(date.month) &&
              Number(date.day) > currentDate + 1
            ? 'mask_input shake_animation'
            : !(date.day || '').includes('_') && (date.day || '').length !== 0
            ? 'mask_input'
            : 'mask_input shake_animation'
        }
        placeholder="Day"
        mask="99"
        colorScheme="gray"
        variant="filled"
        value={date.day}
        onChange={(e: any) => onChange({ day: e.target.value })}
      />
      <Spacer />
      <Input
        type="tel"
        as={InputMask}
        w="30%"
        size="lg"
        className={Number(date.year) > currentYear ? 'mask_input shake_animation' : 'mask_input'}
        placeholder="Year"
        mask="9999"
        colorScheme="gray"
        variant="filled"
        value={date.year}
        onChange={(e: any) => onChange({ year: e.target.value })}
      />
    </Flex>
  );
};
