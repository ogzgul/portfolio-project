import React,{useState} from "react";
import { Container, Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { NavLink , useNavigate } from "react-router-dom";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const navigate= useNavigate()
  function handleSignOut() {
    setIsAuthenticated(false)
    navigate("/")
  }
  function handleSignIn() {
    setIsAuthenticated(true)
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} to="/Feature" name="My Portfolio" />
          <Menu.Menu position="right">
          <Menu.Item onClick={() => scrollToSection('section0')} name="Feature" />
            <Menu.Item onClick={() => scrollToSection('section1')} name="About" />
            <Menu.Item onClick={() => scrollToSection('section2')} name="Services" />
            <Menu.Item onClick={() => scrollToSection('section3')} name="Skills" />
            <Menu.Item onClick={() => scrollToSection('section4')} name="Portfolio" />
            <Menu.Item onClick={() => scrollToSection('section5')} name="Experience" />
            <Menu.Item onClick={() => scrollToSection('section6')} name="Testimonial" />
            <Menu.Item onClick={() => scrollToSection('section7')} name="Contact" />
            <Menu.Item onClick={() => scrollToSection('section8')} name="SocialMedia" />
            {isAuthenticated?<SignedIn signOut={handleSignOut} />:<SignedOut signIn={handleSignIn} />}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
