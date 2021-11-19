import DatePicker from "sassy-datepicker";
import { TimePicker } from "@patternfly/react-core";
import "./Bookings.scss";
var React = require("react");

export const Bookings = () => {
  const onChange = (date) => {
    console.log(date.toString());
  };
  const onChangeTime = (time, hour, minute, isValid) => {
    console.log("time", time);
    console.log("hour", hour);
    console.log("minute", minute);
    console.log("isValid", isValid);
    };
    return (
    <>
      <h1 className="booking__header">Book a Slot</h1>
      <div className="booking__calender">
        <DatePicker onChange={onChange} />
        <br />
        <div className="booking__time-selection">
          <div className="booking__time-section">
            <p className="booking__time-text">Time</p>
            <TimePicker
              className="booking__time"
              time="3:35 AM"
              onChange={onChangeTime}
            />
          </div>
          <button className="booking__button-section">Confirm</button>
        </div>
          </div>
    </>
  );
}

export default Bookings
