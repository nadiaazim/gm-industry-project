import React, { Component } from 'react'
import './Home.scss'

class Home extends Component {
    
    render () {
        return (
            <div className="home">
                <section className="home__car-component">
                    <h1 className="home__car-name">My Chevrolet</h1>
                    <img className="home__car-image"src="" alt="" />
                </section>
                <section className="home__stats">
                    <div className="home__stats-container">
                        <h2 className="home__stats-title">MODEL</h2>
                        <p className="home__stats-details">Bolt EV/White</p>
                    </div>
                    <div className="home__stats-container">
                        <h2 className="home__stats-title">EFFICIENCY</h2>
                        <p className="home__stats-details">93%</p>
                    </div>
                    <div className="home__stats-container">
                        <h2 className="home__stats-title">STATE</h2>
                        <p className="home__stats-details">Parked</p>
                    </div>
                    <div className="home__stats-container">
                        <h2 className="home__stats-title">LOCATION</h2>
                        <p className="home__stats-details">123 Queen St</p>
                    </div>
                </section>
                <section className="home__analytics">
                    <div className="home__analytics-container"></div>
                </section>
            </div>
        )
    }
}

export default Home
