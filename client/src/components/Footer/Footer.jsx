import './Footer.scss';
import car from "../../assets/images/car.jpg";
import charger from "../../assets/images/charger.jpg";
import profile from "../../assets/images/profile.jpg";

import React from 'react'

function Footer() {
    return (
        <div className="footer__container">
            <p className="footer__car-logo footer__car-logo--active"><img src={car} />Car</p>
            <p className="footer__charging-station-logo footer__charging-station-logo--active"><img src={charger} />Charging station</p>
            <p className="footer__profile footer__profile--active"><img src={profile} />Profile</p>
        </div>
    )
}

export default Footer;
