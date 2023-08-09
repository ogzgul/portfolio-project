import React, { useState, useEffect } from "react";
import ExperienceService from "../services/experienceService";
import { Divider, Grid, Image } from "semantic-ui-react";

export default function ExperienceList() {
  const [experiences, setExperiences] = useState([]);
  useEffect(() => {
    let experienceService = new ExperienceService();
    experienceService
      .getExperience()
      .then((result) => setExperiences(result.data.data));
  }, []);
  return (
    <div id="section5">
      {experiences.map((experience) => (
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column key={experience.experienceID}>
              <h2>{experience.name}</h2>
              <h3>{experience.date}</h3>
              <p>{experience.description}</p>
            </Grid.Column>
            <Grid.Column>
              <Image src={experience.imageUrl}></Image>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      ))}
      <Divider/>
    </div>
  );
}
