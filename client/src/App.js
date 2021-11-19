import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import location from "./components/LocationPage/LocationPage";
import Bookings from "./pages/Bookings/Bookings.jsx";
import Home from "./pages/Home/Home";
import Footer from './components/Footer/Footer';
import OnCharge from '../../client/src/components/OnCharge/OnCharge.jsx';
import Confirm from '../../client/src/components/Confirm/Confirm.jsx';

class App extends Component {
  state = {
    carInformation: [],
  };

  componentDidMount() {}

  render() {
    return (
      <BrowserRouter>
        <section>
          {/* <PageNav /> */}
          <Switch>
            <Route path= "/" exact component= {Home}/>
            <Route path= "/confirm" component={Confirm}/>
            <Route path="/location" exact component={location} />
            <Route path= "/oncharge" component= {OnCharge} />
            <Route path= "/bookings" exact component={Bookings}/>
          </Switch>
          <Footer />
        </section>
      </BrowserRouter>
    );
  }
}

export default App;
