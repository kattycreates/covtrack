import { TileLayer, MapContainer } from "react-leaflet";
import { MapData } from "./MapData";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
interface Props {}

const Map = (props: Props) => {
  const { isLoading, error, data } = useQuery("countryData", () =>
    fetch("https://disease.sh/v3/covid-19/countries").then((res) => res.json())
  );
  const modifyData = (data: Array<any>) => {
    return data.map((d: any) => {
      return { name: d.country, value: d.countryInfo.iso2 };
    });
  };
  const [countries, setCountries] = useState(
    data ? modifyData(data) : [{ name: "india", value: { lat: 20, lng: 77 } }]
  );
  const [allData, setAllData] = useState(data ? data : []);
  const [mapCountries, setMapCountries] = useState(data ? data : []);

  useEffect(() => {
    if (data) {
      setMapCountries(data);
      setCountries(modifyData(data));
      setAllData(data);
    }
  }, [data]);
  const [center, setCenter] = useState({ lat: 20, lng: 77 });
  const [zoom, setZoom] = useState(3);
  const countryStat = (country: string) => {
    const countryData =
      country === "All"
        ? allData
        : allData.filter((data: any) => data.country === country);
    if (countryData) {
      console.log("country", countryData);
      setMapCountries(countryData);
      setZoom(4);
      setCenter({
        lat: countryData[0].countryInfo.lat,
        lng: countryData[0].countryInfo.lng,
      });
    }
  };
  return (
    <div className="map">
      <div className="w-full flex justify-end">
        <select
          className="bg-gray-50 my-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e: React.ChangeEvent) =>
            countryStat((e.target as HTMLSelectElement).value)
          }
        >
          <option>All</option>
          {countries.map((country: any, index: number) => (
            <option key={index}>{country.name}</option>
          ))}
        </select>
      </div>

      <MapContainer center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          noWrap={true}
          // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {<MapData countries={mapCountries} />}
      </MapContainer>
    </div>
  );
};

export default Map;
