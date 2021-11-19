import React, { Component } from 'react'

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
                <img src="" alt="" className="pagenav__bar" />
                <div className="pagenav__right"> 
                    <img src="" alt="" className="pagenav__icon" />
                    <img src="" alt="" className="pagenav__icon" />
                    <img src="" alt="" className="pagenav__icon" />
                </div>
            </div>
        )
    }
}


export default PageNav
