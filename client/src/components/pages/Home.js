import React from "react";
import { NavBar } from "../containers";
import { Body } from "../presentations";

class Home extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Body />
      </div>
    );
  }
}

export default Home;
