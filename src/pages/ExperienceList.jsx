import React, { useState, useEffect } from "react";
import ExperienceService from "../services/experienceService";
import { Grid, Image } from "semantic-ui-react";

export default function ExperienceList() {
  const [experiences, setExperiences] = useState([]);
  useEffect(() => {
    let experienceService = new ExperienceService();
    experienceService
      .getExperience()
      .then((result) => setExperiences(result.data.data));
  }, []);
  return (
    <div>
        <Grid columns={2}  >
        
          {experiences.map((experience) => (
            <Grid.Row columns={2}>
            <Grid.Column key={experience.experienceID}>
              <h2>{experience.name}</h2>
              <h3>{experience.date}</h3>
              <p>{experience.description}</p>
              
            </Grid.Column>
            <Grid.Column columns={3}  >
            <Image src={experience.imageUrl}></Image>
          </Grid.Column>
          </Grid.Row>
          ))}
       
      </Grid>
    </div>
  );
}
