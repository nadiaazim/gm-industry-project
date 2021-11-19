import './Footer.scss';
import car from "../../assets/Hackathon/car.png";
import charger from "../../assets/Hackathon/charging.png";
import profile from "../../assets/Hackathon/profile.png";
import { Link } from "react-router-dom";

import React from 'react'

function Footer() {
    return (
        <div className="footer__container">
        <Link to= "/">
            <img className="img__logo1" src={car} />
        </Link>
        <Link to= "/location">
            <img className="img__logo2" src={charger} />
        </Link>
            <img className="img__logo3" src={profile} />
        </div>
    )
}

export default Footer;
