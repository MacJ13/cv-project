import "../styles/style.css";

import React from "react";

import Heading from "./Heading";
import Controls from "./Controls";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Heading />
        <Controls />
      </div>
    );
  }
}

export default App;
