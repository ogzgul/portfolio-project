import { Container } from "semantic-ui-react";
import "./App.css";
import Dashboard from "./layouts/Dashboard";
import "semantic-ui-css/semantic.min.css";
import Navi from "./layouts/Navi";
import SocialMediaList from "./pages/SocialMediaList";


function App() {
  return (
    <div className="App">
      <Navi/>
      <Container className="main">
        <Dashboard />
      </Container>
      <SocialMediaList/>
    </div>
  );
}

export default App;
