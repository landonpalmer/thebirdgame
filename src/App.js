import * as React from "react";
import { useState } from "react";
import WorldMap from "react-svg-worldmap";
import "./App.css";
import { CountryCodes } from "./constants/CountryCodes";


export default function App() {

  const countryData = CountryCodes;

  const [state, setState] = useState({
    cName: "Select Country",
    iso: "",
    val: "",
  });

  const clickAction = React.useCallback(
    ({ countryName, countryCode, countryValue }) => {
      setState({
        cName: countryName,
        iso: countryCode,
        val: "test",
      });
    },
    [],
  );

  return (
    <div className="App">
      <div className="container">
        <img
          src="https://www.allaboutbirds.org/guide/assets/photo/303809061-480px.jpg"
          alt="Bird"
          className="image"
        />
        <WorldMap
          title="The Bird Game"
          value-suffix="people"
          size="xl"
          onClickFunction={clickAction}
          data={[
            { country: "cn", value: 1389618778 }, // china
            { country: "in", value: 1311559204 }, // india
            { country: "us", value: 331883986 }, // united states
            { country: "id", value: 264935824 }, // indonesia
            { country: "pk", value: 210797836 }, // pakistan
            { country: "br", value: 210301591 }, // brazil
            { country: "ng", value: 208679114 }, // nigeria
            { country: "bd", value: 161062905 }, // bangladesh
            { country: "ru", value: 141944641 }, // russia
            { country: "mx", value: 127318112 }, // mexico
          ]}
        />
        <ul>
        <li>Country: {state.cName}</li>
        <li>ISO Code: {state.iso}</li>
        <li>GDP per capita: {state.val}</li>
      </ul>
      </div>
    </div>
  );
}
