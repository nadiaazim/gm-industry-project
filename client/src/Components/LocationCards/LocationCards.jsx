import "./LocationCards.scss";
import { Link } from "react-router-dom";

function LocationCards({ station }) {
  return (
    <>
      <div className="locations-card" key={station.id}>
        <div className="locations-card__left">
          <p className="locations-card__address">{station.address}</p>
          <p className="locations-card__type">{station.t}</p>

          <Link to="/bookings">
            <p className="locations-card__availability">VIEW AVAILABILITY</p>
          </Link>
        </div>

        <div className="locations-card__right">
          <p className="locations-card__km">{station.km}</p>
          <p className="locations-card__rate">{station.rate}</p>

          <Link to="/directions">
            <p className="locations-card__directions">DIRECTIONS</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default LocationCards;
