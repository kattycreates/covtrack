import React from "react";
import Map from "../components/Map";
import LineGraph from "../components/LineGraph";
type Props = {};

const MapChart = (props: Props) => {
  return (
    <div>
      <LineGraph />
      <Map />
    </div>
  );
};

export default MapChart;
