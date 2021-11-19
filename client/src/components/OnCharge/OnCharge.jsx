import './OnCharge.scss';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import React from 'react'

function OnCharge() {
    return (
        <div className="OnCharge__container">
            <h2>Charging Stations</h2>
            <button>MY CHARGING STATION</button>
            <button>FIND A CHARGING STATION</button>
        </div>
    )
}

export default OnCharge;