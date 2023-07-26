import React, { useState, useEffect } from "react";
import { Item } from "semantic-ui-react";
import AboutService from "../services/aboutService";

export default function AboutList() {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    let aboutService = new AboutService();
    aboutService.getAbout().then((result) => setAbouts(result.data.data));
  });

  return (
    <div>
      <Item.Group>
        {abouts.map((about) => (
            <Item key={about.aboutID}>
            <Item.Image  src={about.imageUrl} />
              <Item.Content>
                <Item.Meta>Hakkımda</Item.Meta>
                <Item.Header as="a">{about.title}</Item.Header>
                <Item.Description>{about.description}</Item.Description>
                <Item.Extra>Yaş:{about.age}</Item.Extra>
                <Item.Extra>Mail:{about.mail}</Item.Extra>
                <Item.Extra>Telefon:{about.phone}</Item.Extra>
                <Item.Extra>Adres:{about.address}</Item.Extra>
              </Item.Content>
            </Item>
        ))}
      </Item.Group>
    </div>
  );
}
