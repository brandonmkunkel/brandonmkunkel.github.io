import React, { Component } from "react";
import NavBarComponent from "./components/navbar";
import FooterComponent from "./components/footer";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProjectsPage from "./pages/projects";
import ResumePage from "./pages/resume";
import NotFoundPage from "./pages/not_found";
import DrawerAppBar from "./components/appbar";

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

class App extends Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Router>  
            <NavBarComponent />
            {/* <DrawerAppBar /> */}
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/about" element={<AboutPage />} />
              <Route exact path="/projects" element={<ProjectsPage />} />
              <Route exact path="/resume" element={<ResumePage />} />
              <Route exact path="/not_found" element={<NotFoundPage />} />
              <Route path="*" element={<NotFoundPage />}/>
            </Routes> 
            <FooterComponent/>
          </Router>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
