import './Footer.scss';
import car from "../../assets/images/car.jpg";
import charger from "../../assets/images/charge.jpg";
import profile from "../../assets/images/profile.jpg";

import React from 'react'

function Footer() {
    return (
        <div className="footer__container">
            <p className="footer__logo footer__logo--active"><img className="img__logo" src={car} />Car</p>
            <p className="footer__logo footer__logo--active"><img className="img__logo" src={charger} />Charging station</p>
            <p className="footer__logo footer__logo--active"><img className="img__logo" src={profile} />Profile</p>
        </div>
    )
}

export default Footer;
