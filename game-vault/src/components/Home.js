import React, { Component } from "react";
import Upcoming from "./Upcoming";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <h2>Welcome to the game vault</h2>
        </div>
        <div className="intro">
          <h4>This site is powered by the RAWG Game API</h4>
        </div>
        <div className="upcoming-container">
          <Upcoming />
        </div>
      </div>
    );
  }
}

export default Home;
