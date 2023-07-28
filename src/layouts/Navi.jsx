import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";


export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top">
        <Container >
        <Menu.Item name="My Portfolio" />
        <Menu.Menu position="right">         
          <Menu.Item name="About" />
          <Menu.Item name="Services" />
          <Menu.Item name="Skills" />
          <Menu.Item name="Portfolio" />
          <Menu.Item name="Experience" />
          <Menu.Item name="Contact" />
            <Menu.Item>
              <Button primary>Kayıt Ol!</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
        
      </Menu>
      
    </div>
  );
}
