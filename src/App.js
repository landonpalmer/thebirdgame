import * as React from "react";
import WorldMap from "react-svg-worldmap";
import "./App.css";
import { CountryCodes } from "./constants/countryCodes";

function App() {
  const data = CountryCodes;

  return (
    <div className="App">
      <div className="container">
        <img
          src="https://www.allaboutbirds.org/guide/assets/photo/303809061-480px.jpg"
          alt="Bird"
          className="image"
        />
        <WorldMap
          color="red"
          title="The Bird Game"
          value-suffix="people"
          size="xl"
          richInteraction="true"
          data={data}
        />
      </div>
    </div>
  );
}

export default App;

