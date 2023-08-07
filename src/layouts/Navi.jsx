import React from "react";
import { Container, Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";


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
            <SignedOut/>
            <SignedIn/>
          </Menu.Menu>
        </Container>
        
      </Menu>
      
    </div>
  );
}
