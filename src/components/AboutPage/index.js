import React, { useState } from "react";
import Education from "./Education";
import Skills from "./Skills";

const initialSkills = [
  { id: 1, skill: "Python" },
  { id: 2, skill: "JavaScript" },
  { id: 3, skill: "C++" },
  { id: 4, skill: "React" },
  { id: 5, skill: "Node" },
];

function AboutPage() {
  const [variSkill, setvariSkill] = useState(initialSkills);
  console.log("app.js", variSkill);
  return (
    <div>
      <h1>About Page</h1>
      <Education skills={variSkill} setSkills={setvariSkill} />
      <Skills skills={variSkill} />
    </div>
  );
}

export default AboutPage;
