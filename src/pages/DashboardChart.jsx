import React from "react";
import { ContextAuth } from "../context/Context";
import Chart from "chart.js/auto";

import { Line } from "react-chartjs-2";

const DashboardChart = () => {
  const { orders } = ContextAuth();
  console.log("orders : :: ", orders);

  return (
    <Line
      datasetIdKey="_id"
      data={{
        labels: [
          "Jan",
          "Feb",
          "March",
          "April",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Dataset 1",
            data: orders.map((order) =>
              order.time_stamp
            ),
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
        ],
      }}
    />
  );
};

export default DashboardChart;
