import React from "react";
import LocationCards from "../LocationCards/LocationCards";
import map from "../../assets/images/map.png";
import { Link } from "react-router-dom";
import "./LocationPage.scss";

function LocationPage() {
  return (
    <>
      <section className="location__wrap">
        <h1 className="location__header">Find Charging Stations</h1>
        <div className="location__input-container">
          <form>
            <input
              className="location__search"
              type="text"
              placeholder="MY CURRENT LOCATION"
            />
          </form>
          <Link to="/Locations/add">
            <button className="location__add-btn">+ Add New Location</button>
          </Link>
          <div className="location__button-wrap">
            <button className="location__open-now">OPEN NOW</button>
            <button className="location__closest-first">CLOSEST FIRST</button>
            <img src="" alt="settings icon" />
          </div>
          <div className="location-map">
            <img src={map} alt="map image" />
          </div>
        </div>
        {/* This is the list section */}
        {/* {locationArr.map((location) => (
          <LocationCards key={Location.id} id={Location.id} />
        ))} */}
      </section>
    </>
  );
}

export default LocationPage;
