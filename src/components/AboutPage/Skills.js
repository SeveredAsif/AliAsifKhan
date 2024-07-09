import React from "react";
import About from "./About";

function Skills({skills, deleteHandler, updateHandler}) {
  return (
    <div>
      {skills.map((skillVar) => {
        return <About key={skillVar.id} skills={skillVar} deleteHandler={deleteHandler} updateHandler={updateHandler} />;
      })}
    </div>
  );
}

export default Skills;
