import DatePicker from "sassy-datepicker";
import "./Bookings.scss";

import React from 'react'

export const Bookings = () => {
    
    const onChange = (date) => {
        console.log(date.toString());
    };
    return (
      <>
        <h1 className="booking__header">Book a Slot</h1>
        <div className="booking__calender">
          <DatePicker onChange={onChange} />
        </div>
      </>
    );
}

export default Bookings
