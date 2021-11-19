import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import location from "./components/LocationPage/LocationPage";
import Bookings from "./pages/Bookings/Bookings"
import Sort from "./components/Sort/Sort";
import Home from "./pages/Home/Home";
import PageNav from "./components/PageNav/PageNav";
import './App.scss'
// import Bookings from "./components/Bookings/Bookings";

// import Footer from './components/Footer/Footer';
// import RatePage from '../../client/src/components/RatePage';

class App extends Component {
  state = {
    carInformation: [],
  };

  componentDidMount() {}

  render() {
    return (
      <BrowserRouter>
        <section className="App">
          <PageNav />
          <div className="App_body">
            <Switch>
              <Route path= "/" exact component= {Home}/>
              {/* <Route path= "/car" component={Car}/> */}
              <Route path="/location" exact component={location} />
              {/* <Route path= "/ratepage" component= {RatePage} /> */}
              <Route path= "/bookings" exact component={Bookings}/>
              <Route path="/sort" exact component={Sort} />
            </Switch>
          </div>
          {/* <Footer /> */}
        </section>
      </BrowserRouter>
    );
  }
}

export default App;
