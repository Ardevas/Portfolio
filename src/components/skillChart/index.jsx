// SkillChart.jsx

import React from "react";
import { Doughnut } from "react-chartjs-2";

const SkillsChart = ({ chartData }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="skills-chart">
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default SkillsChart;
