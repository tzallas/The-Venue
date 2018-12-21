import React, { Component } from 'react';
import "./resources/styles.css";
import { Element } from "react-scroll";

import Header from "./components/header_footer/Header";
import Featured from "../src/components/featured/index";
import VenueInfo from "../src/components/venueInfo/index";
import Highlights from "../src/components/highlights/index";
import Pricing from "../src/components/Prices/index";
import Location from "../src/components/location/index";
import Footer from "../src/components/header_footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px", background:"cornflowerblue" }}>
        <Header />

        <Element name="Featured">
          <Featured />
        </Element>
        
        <Element name="NFO">
          <VenueInfo /> 
        </Element>

        <Element name="Highlights">
          <Highlights /> 
        </Element>

        <Element name="Pricing">
          <Pricing />
        </Element>

        <Element name="Location">
          <Location />
        </Element>

        <Footer />
      </div>
    );
  }
}

export default App;
