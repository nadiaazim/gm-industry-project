import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Home from "./pages/Home/Home";
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
        <section>
          {/* <PageNav /> */}
          <Switch>
            {/* <Route path= "/" exact component= {Home}/> */}
            {/* <Route path= "/car" component={Car}/> */}
            <Route path="/location" exact component={location} />
            {/* <Route path= "/ratepage" component= {RatePage} /> */}
            {/* <Route path= "/bookings" exact component={Bookings}/> */}
          </Switch>
          {/* <Footer /> */}
        </section>
      </BrowserRouter>
    );
  }
}

export default App;
