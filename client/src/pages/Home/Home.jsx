import React, { Component } from 'react'
import CarImage from '../../assets/images/2020-Chevrolet-Bolt_EV-white-full_color-driver_side_profile.png'
import CircularPie from '../../assets/images/circularpie.png'
import LowBattery from '../../assets/images/low battery.png'
import './Home.scss'

class Home extends Component {
    
    render () {
        return (
            <div className="home">
                <section className="home__car-component">
                    <h1 className="home__car-name">My Chevrolet</h1>
                    <img className="home__car-image" src={CarImage} alt="your-car" />
                </section>
                <section className="home__stats">
                    <div className="home__stats-container">
                        <h3 className="home__stats-title">MODEL</h3>
                        <p className="home__stats-details">Bolt EV/White</p>
                    </div>
                    <div className="home__stats-container">
                        <h3 className="home__stats-title">EFFICIENCY</h3>
                        <p className="home__stats-details">93%</p>
                    </div>
                    <div className="home__stats-container">
                        <h3 className="home__stats-title">STATE</h3>
                        <p className="home__stats-details">Parked</p>
                    </div>
                    <div className="home__stats-container">
                        <h3 className="home__stats-title">LOCATION</h3>
                        <p className="home__stats-details">123 Queen St</p>
                    </div>
                </section>
                <section className="home__analytics">
                    <div className="home__analytics-container-top">
                        <div className="home__analytics-block">
                            <h3 className="home__analytics-title">RANGE</h3>
                            <img className="home__analytics-pie" src={CircularPie} alt="pie-chart" />
                        </div>
                        <div className="home__analytics-divs">
                            <div className="home__analytics-divs-top">
                                <h3 className="home__analytics-title">BATTERY</h3>
                                <div className="home__analytics-battery">
                                    {/* <div className="home__analytics-battery-image">
                                        <div className="home__analytics-battery-image-inside"></div>
                                    </div> */}
                                    <img className="home__analytics-battery-image" src={LowBattery} alt="pie-chart" />
                                    <img className="home__analytics-battery-image" src={LowBattery} alt="pie-chart" />
                                    <p className="home__analytics-battery-stats">12%</p>
                                </div>
                            </div>
                            <div className="home__analytics-divs-bottom">
                                <h3 className="home__analytics-title">TEMPERATURE</h3>
                                <div className="home__analytics-temperature">
                                    {/* <img src="" alt="minus-sign" className="home__analytics-temperature-logo" /> */}
                                    <p className="home__analytics-temperature-stats">23°C</p>
                                    {/* <img src="" alt="plus-sign" className="home__analytics-temperature-logo" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home__analytics-container-bottom">
                        <div className="home__analytics-block">
                            <h3 className="home__analytics-title">MILEAGE</h3>
                            <div className="home__analytics-content">
                                <p className="home__analytics-number">128 921</p>
                                <p className="home__analytics-unit">KM</p>
                            </div>
                        </div>
                        <div className="home__analytics-block">
                            <h3 className="home__analytics-title">CONSUMPTION</h3>
                            <div className="home__analytics-content">
                                <p className="home__analytics-number">163</p>
                                <p className="home__analytics-unit">W / KM</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home
