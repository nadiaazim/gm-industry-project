import React, { Component } from 'react'
import NotchLogo from '../../assets/icons/Notch.png'
import IphoneLogo from '../../assets/icons/iphone-right.png'
import './PageNav.scss'

class PageNav extends Component {
    state = {

    }

    currentTime = () => {
        const today = new Date ();
        const time = today.getHours() + ':' + today.getMinutes()
        console.log(time);
        return time;
    }

    render () {
        return (
            <div className="pagenav">
                <p className="pagenav__time">{this.currentTime()}</p> 
                <img src={NotchLogo} alt="iphone-notch" className="pagenav__bar" />
                <img src={IphoneLogo} alt="" className="pagenav__icon" />
            </div>
        )
    }
}


export default PageNav
