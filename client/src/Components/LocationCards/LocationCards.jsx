import "./LocationCards.scss";
import { Link } from "react-router-dom";

function LocationCards({ station }) {
  return (
    <>
      <div className="locations-card">
        <div className="locations-card__left">
          <p className="locations-card__address">{station.address}</p>
          <Link to="/bookings">
            <p className="locations-card__availability">
              {station.availability}
            </p>
          </Link>
        </div>

        <div className="locations-card__right">
          <p className="locations-card__km">{station.km}</p>
          <p className="locations-card__rate">{station.rate}</p>
          <Link to="/bookings">
            <p className="locations-card__directions">Directions</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default LocationCards;
