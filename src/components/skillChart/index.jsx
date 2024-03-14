// SkillChart.jsx

import React from "react";
import { Doughnut } from "react-chartjs-2";

const SkillsChart = ({ chartData }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "rgb(255, 255, 255)",
          font: {
            family: "Montserrat",
            size: 15,
          },
        },
      },
    },
  };

  return (
    <div className="skills-chart">
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default SkillsChart;
