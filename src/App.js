// react
import React from "react";

// components
import AssetRadarChart from "./components/AssetRadarChart";

// data
// import { wineFlavors } from "./data/wineFlavorsTestData";
import { assetStrength } from "./data/assetStrengthData";

// styles
import "./styles/globals.css";

function App() {
  return (
    <>
      <header className="app-header">
        <h1>Nivo Radar Chart for A.I. Asset Strength</h1>
      </header>
      <AssetRadarChart data={assetStrength} />
    </>
  );
}

export default App;
