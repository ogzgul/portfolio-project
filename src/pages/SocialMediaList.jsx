import React, { useState, useEffect } from "react";
import SocialMediaService from "../services/socialMediaService";
import {
  Container,
  List,
  Segment,
} from "semantic-ui-react";

export default function SocialMediaList() {
  const [socialmedias, setSocialMedia] = useState([]);
  useEffect(() => {
    let socialMediaService = new SocialMediaService();
    socialMediaService
      .getSocialMedia()
      .then((result) => setSocialMedia(result.data.data));
  });
  return (
    <div>
      <Segment
        inverted
      >
        <Container textAlign="center">
          <h1>Oğuz Gül</h1>
          <h3>Web Developer & Mobile Application Developer</h3>
          <List horizontal inverted divided link size="small">
            {socialmedias.map((socialmedia) => (
              <List.Item as="a" href={socialmedia.url}>
                <h4>{socialmedia.name}</h4>
                <i class={socialmedia.icon}></i>
              </List.Item>
            ))}
          </List>
        </Container>
      </Segment>
    </div>
  );
}
