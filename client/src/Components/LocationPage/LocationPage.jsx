import React from "react";
import map from "../../assets/images/map.png";
import { Link } from "react-router-dom";
import filter from "../../assets/icons/filter-icon.png";
import arrow from "../../assets/icons/arrow-left.png";
import "./LocationPage.scss";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "14rem",
  bgcolor: "background.paper",
  border: "none",
  outline: "none",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

function LocationPage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <section className="location">
        <Link to="/">
          <img className="location__arrow" src={arrow} alt="arrow" />
        </Link>
        <h1 className="location__header">Find Charging Stations</h1>
        <div className="location__input-container">
          <form>
            <input
              className="location__search"
              type="text"
              placeholder="MY CURRENT LOCATION"
            />
          </form>

          <div className="location__button-wrap">
            <button className="location__open-now">OPEN NOW</button>
            <button className="location__closest-first">CLOSEST FIRST</button>

            <div className="sort">
              <a onClick={handleOpen}>
                <img
                  className="location__filter"
                  src={filter}
                  alt="settings icon"
                />
              </a>
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
                  <br />
                  <button className="sort__button-save">SAVE CHANGES</button>
                </Box>
              </Modal>
            </div>
          </div>
          <div className="location__map-wrap">
            <img className="location__map" src={map} alt="map" />
          </div>
        </div>
      </section>
    </>
  );
}

export default LocationPage;
