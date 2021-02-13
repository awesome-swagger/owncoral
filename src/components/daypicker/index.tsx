// @ts-nocheck
import React, { useState } from "react";
import DatePicker from "react-mobile-datepicker";

const DayPicker = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
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
  console.log(date.getDate);
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

  const handleSelect = (newDate) => {
    setDate(newDate);
    setOpen(false);
  };
  return (
    <div style={{ margin: "16px 0" }}>
      <h2 style={{ cursor: "pointer" }} onClick={handleClick}>
        Select Date
      </h2>
      <DatePicker
        value={date}
        isOpen={open}
        onSelect={handleSelect}
        onCancel={handleCancel}
        dateConfig={dateConfig}
        confirmText="Confirm"
        cancelText="Cancel"
      />
      <h1>
        <span>{date.getFullYear()}</span> :{" "}
        <span>{monthMap[date.getMonth() + 1]}</span> :{" "}
        <span>{date.getDate()}</span>
      </h1>
    </div>
  );
};
export default DayPicker;
