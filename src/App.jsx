import React from "react";
import "./App.css";
import MinutesToHours from "./MinutesToHours";
import KmToMiles from "./KmToMiles";

function App() {
  const [index, setIndex] = React.useState("start");
  const onSelect = (event) => {
    setIndex(event.target.value); // 0 또는 1
  };
  return (
    <div className="App">
      <h1>Super Converter</h1>
      <select value={index} onChange={onSelect}>
        <option value="start">Select your units</option>
        <option value="0">Minutes & Hours</option>
        <option value="1">Km & Miles</option>
      </select>
      <hr />
      {index === "0" ? <MinutesToHours /> : null}
      {index === "1" ? <KmToMiles /> : null}
    </div>
  );
}

export default App;
