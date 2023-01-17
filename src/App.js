import React, { Component } from "react";
import NavBarComponent from "./components/navbar";
import FooterComponent from "./components/footer";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import HomePage from "./pages/home";
import ProjectsPage from "./pages/projects";
import ResumePage from "./pages/resume";
import NotFoundPage from "./pages/not_found";
import SkillsPage from "./pages/skills";
import ContactPage from "./pages/contact";

class App extends Component {
  render() {
    return (
      <div>
        <Router>  
          <NavBarComponent />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/projects" element={<ProjectsPage />} />
            <Route exact path="/resume" element={<ResumePage />} />
            <Route exact path="/skills" element={<SkillsPage />} />
            <Route exact path="/contact" element={<ContactPage />} />
            <Route exact path="/not_found" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />}/>
          </Routes> 
          <FooterComponent/>
        </Router>
      </div>
    );
  }
}

export default App;
