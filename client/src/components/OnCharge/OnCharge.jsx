import './OnCharge.scss';
import { Link } from "react-router-dom";
import React from 'react'

function OnCharge() {
    return (
        <div className="on-charge__container">
            <h2>Charging Stations</h2>
            <button className="my">MY CHARGING STATION</button>
        <Link to="/location">
            <button className="find">FIND A CHARGING STATION</button>
        </Link>
        </div>
    )
}

export default OnCharge;