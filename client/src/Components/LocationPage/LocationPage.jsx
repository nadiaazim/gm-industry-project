import React from "react";
import map from "../../assets/images/map.png";
import { Link } from "react-router-dom";
import filter from "../../assets/icons/filter-icon.png";
import arrow from "../../assets/icons/arrow-left.png";
import "./LocationPage.scss";

function LocationPage() {
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
            <Link to="/sort">
              <img
                className="location__filter"
                src={filter}
                alt="settings icon"
              />
            </Link>
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
