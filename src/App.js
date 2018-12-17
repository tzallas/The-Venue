import React, { Component } from 'react';
import "./resources/styles.css";

import Header from "./components/header_footer/Header";
import Featured from "../src/components/featured/index";
import VenueInfo from "../src/components/venueInfo/index";
import Highlights from "../src/components/highlights/index";
import Pricing from "../src/components/Prices/index";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px", background:"cornflowerblue" }}>
        <Header />
        <Featured /> {/* einai to index to fearures*/}
        <VenueInfo /> {/* einai to index VenueInfo*/}
        <Highlights /> {/* einai to index Highlights*/}
        <Pricing />
      </div>
    );
  }
}

export default App;
