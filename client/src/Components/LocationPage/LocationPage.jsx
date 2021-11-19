import React from "react";
<<<<<<< HEAD
=======
// import LocationCards from "../LocationCards/LocationCards";
>>>>>>> develop
import map from "../../assets/images/map.png";
// import { Link } from "react-router-dom";
import "./LocationPage.scss";

function LocationPage() {
  return (
    <>
      <section className="location">
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
            <img src="" alt="settings icon" />
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
