import React, { useState, useEffect } from "react";
import AboutService from "../services/aboutService";
import {
  Container,
  Grid,
  Header,
  Image,
  Segment,
} from "semantic-ui-react";
export default function AboutList() {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    let aboutService = new AboutService();
    aboutService.getAbout().then((result) => setAbouts(result.data.data));
  }, []);

  return (
    <div>
      <Container>
        <Segment vertical>
          <Grid container stackable verticalAlign="middle">
            {abouts.map((about) => (
              <Grid.Row key={about.aboutID}>
                <Grid.Column width={8}>
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    {about.title}
                  </Header>
                  <p style={{ fontSize: "1.1em" }}>{about.description}</p>
                  <p> Yaş: {about.age}</p>
                  <p> Mail: {about.mail}</p>
                  <p> Telefon: {about.phone}</p>
                  <p> Adres: {about.address}</p>
                </Grid.Column>
                <Grid.Column floated="right" width={6}>
                  <Image bordered rounded size="large" src={about.imageUrl} />
                </Grid.Column>
              </Grid.Row>
            ))}
          </Grid>
        </Segment>
      </Container>
    </div>
  );
}
