import "./Location.scss";
import React from "react";
import { Component } from "react";
import axios from "axios";
import LocationPage from "../../components/LocationPage/LocationPage";
import LocationCards from "../../components/LocationCards/LocationCards";

class Location extends Component {
  state = {
    locations: [],
  };

  componentDidMount() {
    axios
      .get(`http://localhost:8080/api/location`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          locations: response.data,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <>
        <LocationPage />
        {this.state.locations.map((location) => {
          return <LocationCards station={location} />;
        })}
      </>
    );
  }
}

export default Location;
