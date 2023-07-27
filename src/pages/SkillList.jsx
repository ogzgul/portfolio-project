import React, { useState, useEffect } from "react";
import SkillService from "../services/skillService";
import { Divider, Grid, Progress } from "semantic-ui-react";

export default function SkillList() {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    let skillService = new SkillService();
    skillService.getSkill().then((result) => setSkills(result.data.data));
  }, []);
  return (
    <div>
      <h1>My Skills</h1>
      <Grid columns={2} divided>
        <Grid.Row>
          {skills.map((skill) => (
            <Grid.Column key={skill.skillID} width={8}>
              <h3>{skill.title}</h3>
              <Progress
                percent={skill.value}
                inverted
                color="orange"
                progress
              />
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
      <Divider/>
    </div>
  );
}
