import './Sort.scss'

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Sort = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
      <div className="sort">
        <div className="sort__close-container">
          <img className="sort__close-button" src="" alt="" />
        </div>
        <div className="sort__body">
          <Button onClick={handleOpen}>Open modal</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <h1 className="sort__header">Sort Results By</h1>
              <button className="sort__button sort__button--blue">
                OPEN NOW
              </button>
              <button className="sort__button">PUBLIC STATIONS ONLY</button>
              <button className="sort__button sort__button--blue">
                CLOSEST FIRST
              </button>
                <button className="sort__button">LOWEST RATE FIRST</button>
                <br/>
              <button className="sort__button-save">SAVE CHANGES</button>
            </Box>
          </Modal>
        </div>
      </div>
    );
}

export default Sort
