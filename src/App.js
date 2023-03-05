import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';

import DrawerAppBar from "./components/appbar";

import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProjectsPage from "./pages/projects";
import ResumePage from "./pages/resume";
import NotFoundPage from "./pages/not_found";
import {ColorModeToggler} from "./theme";


class App extends Component {
  render() {
    return (
      <ColorModeToggler>
        <CssBaseline />
        <Router basename="/">
          <DrawerAppBar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="resume" element={<ResumePage />} />
            <Route path="not_found" element={<NotFoundPage />} />

            <Route path="projects" element={<ProjectsPage />} />
            {/* <Route path="/:id" element={<NotFoundPage />} /> */}

            <Route path="*" element={<NotFoundPage />}/>
          </Routes>
        </Router>
      </ColorModeToggler>
    );
  }
}

export default App;
