import React from "react";
import numeral from "numeral";
import { Popup, Circle } from "react-leaflet";
const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    multiplier: 100,
  },
  recovered: {
    hex: "#7dd71d",
    multiplier: 1200,
  },
  deaths: {
    hex: "#fb4443",
    multiplier: 2000,
  },
};
type Props = {
  countries: any;
};
export const MapData = (props: Props) => {
  const { countries } = props;

  return (
    <div className="leaflet-marker">
      {countries.map((country: any, index: number) => (
        <Circle
          key={index}
          center={[country.countryInfo.lat, country.countryInfo.long]}
          color={casesTypeColors.cases.hex}
          fillColor={casesTypeColors.cases.hex}
          fillOpacity={0.4}
          radius={Math.sqrt(country.cases) * casesTypeColors.cases.multiplier}
        >
          <Popup>
            <div className="info-container">
              <div
                className="info-flag"
                style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
              ></div>
              <div className="info-name">{country.country}</div>
              <div className="info-confirmed">
                Cases: {numeral(country.cases).format("0,0")}
              </div>
              <div className="info-recovered">
                Recovered: {numeral(country.recovered).format("0,0")}
              </div>
              <div className="info-deaths">
                Deaths: {numeral(country.deaths).format("0,0")}
              </div>
            </div>
          </Popup>
        </Circle>
      ))}
    </div>
  );
};
