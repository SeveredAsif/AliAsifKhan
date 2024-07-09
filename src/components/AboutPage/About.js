import React, { useState } from "react";

function About({ skills, deleteHandler, updateHandler }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedSkill, setUpdatedSkill] = useState();
  const updatedSkillState = (e) => {
    setUpdatedSkill({
      id: skills.id,
      skill: e.target.value,
    });
  };

  const updateAndReset = (input, e) => {
    e.preventDefault();
    // call updateHandler with the input
    updateHandler(input);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={(e) => updateAndReset(updatedSkill, e)}>
          <input
            type="text"
            defaultValue={skills.skill}
            onChange={updatedSkillState}
          />
        </form>
      ) : (
        <p onDoubleClick={() => setIsEditing(true)}>{skills.skill}</p>
      )}
      <button onClick={() => deleteHandler(skills.id)}>Delete</button>
    </div>
  );
}

export default About;
