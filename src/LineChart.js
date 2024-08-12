import React, { useState, useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const LineChart = () => {
  const chartRef = useRef(null);
  const [timeRange, setTimeRange] = useState("1w");
  const [isFullscreen, setIsFullscreen] = useState(false);

  const dataMap = {
    "1d": [14500, 12000, 23500, 14500, 64000, 33800, 64200, 13179, 64000, 33800,],
    "3d": [13179, 64000, 33800, 64200, 13179, 12000, 23500, 14500, 64000, 33800,],
    "1w": [
      12000, 23500, 14500, 64000, 33800, 64200, 13179, 12000, 23500, 14500,
      12000, 23500, 14500, 64000, 33800, 64200, 13179, 64000, 33800, 64200,
      13179, 12000, 23500, 14500, 64000, 33800, 64200, 13179, 12000, 23500,
      14500, 12000, 23500, 14500, 64000, 33800, 64200, 13179, 64000, 33800,
      64200, 13179, 12000, 23500, 14500, 64000, 33800, 64200, 13179, 12000,
      23500, 14500, 12000, 23500, 14500, 64000, 33800, 64200, 13179, 64000,
      33800, 64200, 13179, 12000, 23500, 14500, 64000, 33800, 64200, 13179,
      12000, 23500, 14500, 12000, 23500, 14500, 64000, 33800, 64200, 13179,
      64000, 33800, 64200, 13179, 12000, 23500, 14500, 64000, 33800, 64200,
      13179, 12000, 23500, 14500, 12000, 23500, 14500, 64000, 33800, 64200,
      13179, 64000, 33800, 64200, 13179, 12000, 23500, 14500, 64000, 33800,
      64200, 13179, 12000, 23500, 14500, 12000, 23500, 14500, 64000, 33800,
      64200, 13179, 64000, 33800, 64200, 13179,
    ],
    "1m": [ 64200, 13179, 64000, 33800, 64200, 13179],
    "6m": [13179, 64000, 33800, 64200, 13179, 12000, 23500, 14500, 64000, 33800,],
    "1y": [58000, 59000, 60000, 61000, 62000, 63000, 64000],
    max: [33800, 64200, 13179, 12000, 23500, 14500, 64000, 33800, 64200, 13179,],
  };

  const labels = [
    "Day 1",
    "Day 2",
    "Day 3",
    "Day 4",
    "Day 5",
    "Day 6",
    "Day 7",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: dataMap[timeRange],
        borderColor: "#3a3ae8",
        backgroundColor: "rgba(58, 58, 232, 0.1)",
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        grid: { display: false },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) =>
            `${context.dataset.label}: ${context.raw.toLocaleString()} USD`,
        },
      },
    },
    elements: {
      point: { radius: 0 },
    },
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (chartRef.current.requestFullscreen) {
        chartRef.current.requestFullscreen();
      } else if (chartRef.current.mozRequestFullScreen) { 
        chartRef.current.mozRequestFullScreen();
      } else if (chartRef.current.webkitRequestFullscreen) {
        chartRef.current.webkitRequestFullscreen();
      } else if (chartRef.current.msRequestFullscreen) {
        chartRef.current.msRequestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.fullscreenElement) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };
  

  return (
    <div
      ref={chartRef}
      style={{
        padding: "20px",
        position: isFullscreen ? "fixed" : "relative",
        top: 0,
        left: 0,
        width: isFullscreen ? "100%" : "auto",
        height: isFullscreen ? "100%" : "auto",
        background: isFullscreen ? "#fff" : "transparent",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
            }}
            onClick={toggleFullscreen}
          >
            {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
          </button>
          <button
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            Compare
          </button>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          {["1d", "3d", "1w", "1m", "6m", "1y", "max"].map((range) => (
            <button
              key={range}
              style={{
                border: "none",
                background: timeRange === range ? "#3a3ae8" : "transparent",
                color: timeRange === range ? "#fff" : "#000",
                borderRadius: timeRange === range ? "5px" : "0",
                padding: timeRange === range ? "5px 10px" : "none",
                cursor: "pointer",
                fontWeight: "bold",
              }}
              onClick={() => setTimeRange(range)}
            >
              {range}
            </button>
          ))}
        </div>
      </div>
      <Line data={data} options={options} />
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between",
          color: "#000",
        }}
      >
        <div>{dataMap[timeRange][0].toLocaleString()}</div>
        <div style={{ color: "#3a3ae8", fontWeight: "bold" }}>
          {dataMap[timeRange][dataMap[timeRange].length - 1].toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default LineChart;
