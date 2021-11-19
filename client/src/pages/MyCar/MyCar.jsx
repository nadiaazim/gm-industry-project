import { Component } from "react";
import axios from "axios";
import car from "../../assets/images/my-car.jpg"

import React, { Component } from 'react'

export default class MyCar extends Component {
    render() {
        return (
            <section className="cars-section">
                <h1 className="car-section__header">My Cars</h1>
                <img src={car} alt="Image of my car" className="car-section__image" />

                
            </section>
        )
    }
}
