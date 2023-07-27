import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";


export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top">
        <Container >
        <Menu.Item name="home" />
        <Menu.Menu position="right">         
          <Menu.Item name="messages" />
            <Menu.Item>
              <Button primary>Kayıt Ol!</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
        
      </Menu>
      
    </div>
  );
}
