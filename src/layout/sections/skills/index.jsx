// Skills.jsx

import React from "react";
import SectionTitle from "../../../components/sectionTitle";
import SectionRow from "../../../components/sectionRow";
import hardSkillsData from "../../../data/hardSkillsData";
import softSkillsData from "../../../data/softSkillsData";

// Related to SkillsCharts
import "chart.js/auto";
import SkillsChart from "../../../components/skillChart";

const Skills = () => {
  const softSkillsList = softSkillsData.map((skill, index) => (
    <li key={index}>
      <h2>{skill.label}</h2>
      <p>{skill.description}</p>
      <p className="skillLevel">Niveau : {skill.level}</p>
    </li>
  ));

  return (
    <div className="skills">
      <SectionTitle title="Compétences" />
      <div className="skills-charts">
        <div className="hard-skills">
          <SectionRow texte="Hard Skills" />
          <SkillsChart chartData={hardSkillsData} />
        </div>
        <div className="soft-skills">
          <SectionRow texte="Soft Skills" />
          <ul>{softSkillsList}</ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
