// react
import React from "react";

// nivo
import { ResponsiveRadar } from "@nivo/radar";

// styles
import "../styles/asset-radar-chart.css";

const AssetRadarChart = ({ data }) => (
  <div className="radar-chart-container">
    <h2 className="chart-title">Asset Strengths: Anomaly Detection Service</h2>
    <ResponsiveRadar
      data={data}
      keys={["anomolyDetectionService"]}
      indexBy="factor"
      maxValue="auto"
      margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
      curve="linearClosed"
      borderWidth={2}
      borderColor={{ from: "color" }}
      gridLevels={8}
      gridShape="linear"
      gridLabelOffset={36}
      enableDots={true}
      dotSize={10}
      dotColor={{ theme: "background" }}
      dotBorderWidth={2}
      dotBorderColor={{ from: "color" }}
      enableDotLabel={true}
      dotLabel="value"
      dotLabelYOffset={-12}
      colors={["rgb(227, 28, 158)"]}
      fillOpacity={0.2}
      blendMode="multiply"
      animate={true}
      motionConfig="wobbly"
      isInteractive={true}
    />
  </div>
);

export default AssetRadarChart;
