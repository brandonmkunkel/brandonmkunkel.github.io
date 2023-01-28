import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import FooterComponent from "./components/footer";
import DrawerAppBar from "./components/appbar";

import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProjectsPage from "./pages/projects";
import ResumePage from "./pages/resume";
import NotFoundPage from "./pages/not_found";

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

class App extends Component {
  render() {
    return (
      <React.Fragment style={{userSelect: "text"}}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Router>  
            <DrawerAppBar />
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
      </React.Fragment>
    );
  }
}

export default App;
