import DatePicker from "sassy-datepicker";
import { TimePicker } from "@patternfly/react-core";
import "./Bookings.scss";import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
var React = require("react");

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "15rem",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
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
                time="6:00 PM"
                onChange={onChangeTime}
              />
            </div>
            <button className="booking__button-section" onClick={handleOpen}>
              Confirm
            </button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className="box-modual" sx={style}>
                <div className="confirm-modual">
                  <h1 className="open-modual">Are you sure?</h1>
                  <h2 className="open-modual1">
                    Your booking is for Friday, November 19, 2021 at 6:00 PM?
                  </h2>
                  <div className="confirm-buttons">
                    <button onClick={handleClose} className="comfirm__cancel">
                      Cancel
                    </button>
                    <br />
                    <button onClick={handleClose} className="confirm">
                      Confirm
                    </button>
                  </div>
                </div>
              </Box>
            </Modal>
          </div>
        </div>
      </>
    );
}

export default Bookings
