import axios from "axios";
import React, { useEffect, useState } from "react";
import Chart from 'react-apexcharts';
import { BASE_URL } from "../../utils/requests";
import { BarChartProps } from "../../types/barChart";



const Barchart = (props: BarChartProps) => {

  const [chartData, setChartData] = useState<any>(

    {
      labels: {
        categories: []
      },
      series: []
    }

  );

  useEffect(() => {
    axios.get(`${BASE_URL}/pessoa/${props?.urlPath}`).then((response) => {
      const data = response.data;

      const myLabels = Object.keys(data);

      const mySeries = Object.values(data);

      setChartData({
        labels: {
          categories: myLabels
        },
        series: [
          {
            data:mySeries
          }
        ]
      });
    });
  }, []);

  const options = {
    plotOptions: {
      bar: {
        horizontal: false,
      }
    },
  };


  return (
    <>
      <div className="card h-100">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-12"><h5 className="text-center text-secondary">{props?.title}</h5></div>
          </div>
          <Chart
            options={{ ...options, xaxis: chartData.labels }}
            series={chartData.series}
            type="bar"
            height="240"
          />
        </div>
      </div>
    </>
  );
}

export default Barchart;