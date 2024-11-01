import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

// style for date picker
const CustomDatePicker = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: rgba(17, 17, 17, 0.2);

  .react-datepicker {
    background-color: rgba(17, 17, 17, 0.4);
    backdrop-filter: blur(2px);
    border: none;
    border-radius: 6px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 90%;
    max-width: 400px; 
    height: auto; 
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px; 
  }

  .react-datepicker__month-container {
    width: 100%;
    margin: 5px 0;
  }

  .react-datepicker__week {
    display: flex;
    justify-content: space-between; 
    width: 100%;
  }

  .react-datepicker__header {
    background-color: rgba(17, 17, 17, 0.4);
    border-bottom: none;
    margin-top: 10px;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .react-datepicker__current-month {
    color: white;
    font-weight: bold;
    font-size: 1.5em; 
    margin-bottom: 10px; 
  }
  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px;
    margin-bottom: 10px; 
  }

  .react-datepicker__day-name {
    color: white;
  }

  .react-datepicker__day {
    width: calc(100% / 7);
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 0; 
    color: white;
    font-size: 1em;
    transition: color 0.3s;
    &:hover {
      color: #64d2ff;
    }
  }

  .react-datepicker__day--selected {
    background-color: #64d2ff;
    color: white;
    border-radius: 50%;
  }

  .react-datepicker__day--keyboard-selected {
    background-color: #64d2ff;
    color: white;
    border-radius: 50%;
  }

  .react-datepicker__day--today {
    background-color: #64d2ff;
    border-radius: 50%;
    color: white;
  }

  .react-datepicker__time-container {
    background-color: rgba(255, 255, 255, 0.9);
    border-left: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

const PickADate = ({ onDateChange, onClose }) => {
  console.log("onclose prop:", onclose);
  const [selectedDate, setSelectedDate] = useState(null);
  const today = new Date();

  const handleDateChange = (date) => {
    if (date < today) {
      alert("Geçmiş bir tarih girdiniz");
    } else {
      setSelectedDate(date);
      onDateChange(date);
      onClose();
    }
  };

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <CustomDatePicker onClick={handleOutsideClick}>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        // showTimeSelect
        // timeFormat="HH:mm"
        // timeIntervals={15}
        inline
      />
    </CustomDatePicker>
  );
};

export default PickADate;
