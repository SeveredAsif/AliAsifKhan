import React from "react";
import About from "./About";

function Skills({skills}) {
  return (
    <div>
      {skills.map((skillVar) => {
        return <About key={skillVar.id} skills={skillVar} />;
      })}
    </div>
  );
}

export default Skills;
