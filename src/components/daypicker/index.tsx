// @ts-nocheck
import React, { useState } from "react";
import DatePicker from "react-mobile-datepicker";
import { Heading } from "@chakra-ui/react";

interface DayPickerProps {
  date: Date;
  onChange: (newDate: Date) => void;
}

const DayPicker: React.FC<DayPickerProps> = ({
  date,
  onChange,
}: DayPickerProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const monthMap = {
    "1": "Jan",
    "2": "Feb",
    "3": "Mar",
    "4": "Apr",
    "5": "May",
    "6": "Jun",
    "7": "Jul",
    "8": "Aug",
    "9": "Sep",
    "10": "Oct",
    "11": "Nov",
    "12": "Dec",
  };
  const dateConfig = {
    year: {
      format: "YYYY",
      caption: "Year",
      step: 1,
    },
    month: {
      format: (value) => monthMap[value.getMonth() + 1],
      caption: "Mon",
      step: 1,
    },
    date: {
      format: "DD",
      caption: "Day",
      step: 1,
    },
  };
  const handleClick = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const handleSelect = (newDate: Date): void => {
    onChange(newDate);
    setOpen(false);
  };
  return (
    <div style={{ margin: "16px 0" }}>
      <Heading
        fontSize="1.5rem"
        textAlign="left"
        cursor="pointer"
        onClick={handleClick}
      >
        Select Date
      </Heading>
      <DatePicker
        value={date}
        isOpen={open}
        onSelect={handleSelect}
        onCancel={handleCancel}
        dateConfig={dateConfig}
        confirmText="Confirm"
        cancelText="Cancel"
      />
      <Heading fontSize="1.5rem" textAlign="left">
        <span>{date.getFullYear()}</span> :{" "}
        <span>{monthMap[date.getMonth() + 1]}</span> :{" "}
        <span>{date.getDate()}</span>
      </Heading>
    </div>
  );
};
export default DayPicker;
