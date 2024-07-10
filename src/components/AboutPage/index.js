import React, { useState, useEffect } from "react";
import Education from "./Education";
import Skills from "./Skills";
import axios from "axios";

function AboutPage() {
  const [variSkill, setvariSkill] = useState([]);
  console.log("app.js", variSkill);

  useEffect(() => {
    axios
      .get("http://localhost:8888/skills", {})
      .then((res) => {
        console.log(res);
        setvariSkill(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //    const newSkills = variSkill.filter((item) => {
  //  return item.id !== id;
  //});

  const deleteHandler = (id) => {
    axios
      .delete(`http://localhost:8888/skills/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    const newSkills = variSkill.filter((item) => {
      return item.id !== id;
    });
    setvariSkill(newSkills);
  };

  const updateHandler = (ski) => {
    axios
      .put(`http://localhost:8888/skills/${ski.id}`, ski)
      .then((res) => {
        console.log(res);
        setvariSkill(
          variSkill.map((item) => {
            if (item.id === ski.id) {
              return {
                ...item,
                skill: ski.skill,
              };
            } else {
              return item;
            }
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>About Page</h1>
      <Education skills={variSkill} setSkills={setvariSkill} />
      <Skills
        skills={variSkill}
        deleteHandler={deleteHandler}
        updateHandler={updateHandler}
      />
    </div>
  );
}

export default AboutPage;
