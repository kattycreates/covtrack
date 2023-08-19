import React, { useEffect, useState } from "react";

import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useQuery } from "react-query";
import { CategoryScale } from "chart.js";
import numeral from "numeral";
Chart.register(CategoryScale);

type Props = {};

const LineGraph = (props: Props) => {
  const formatChartData = (data: any) => {
    const cases = [];
    const deaths = [];
    const recoveries = [];

    for (let date in data.cases) {
      const newCase = {
        x: date,
        y: data.cases[date],
      };
      const newDeath = {
        x: date,
        y: data.deaths[date],
      };
      const newRecovery = {
        x: date,
        y: data.recovered[date],
      };
      cases.push(newCase);
      deaths.push(newDeath);
      recoveries.push(newRecovery);
    }
    return {
      cases,
      deaths,
      recoveries,
    };
  };
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all").then(
      (res) => res.json()
    )
  );

  const [dailyData, setDailyData] = useState(
    data ? formatChartData(data) : { cases: [], deaths: [], recoveries: [] }
  );

  useEffect(() => {
    if (data) {
      setDailyData(formatChartData(data));
    }
  }, [data]);
  const options = {
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    maintainAspectRatio: false,
    tooltips: {
      mode: "index",
      intersect: false,
      callbacks: {
        label: function (tooltipItem: any, data: any) {
          return numeral(tooltipItem.value).format("+0,0");
        },
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const keys = Object.keys(dailyData.cases);
  const dateLabels = [keys[0], keys[keys.length - 1]];

  return (
    <div>
      {dailyData.cases ? (
        <Line
          options={options}
          data={{
            labels: dateLabels,
            datasets: [
              {
                label: "Recovered",

                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235, 0.5)",
                data: dailyData.recoveries,
              },
              {
                label: "Cases",
                backgroundColor: "rgba(204, 16, 52, 0.5)",
                borderColor: "#CC1034",
                data: dailyData.cases,
              },
              {
                label: "Deaths",
                backgroundColor: "rgba(0, 0,0, 0.5)",
                borderColor: "#000000",
                data: dailyData.deaths,
              },
            ],
          }}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default LineGraph;
