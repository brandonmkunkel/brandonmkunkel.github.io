import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';

import DrawerAppBar from "./layouts/app_bar";

import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProjectPage from "./pages/project";
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

            <Route path="projects"> 
              <Route index element={<ProjectsPage />} />
              <Route path=":id"  element={<ProjectPage />} 
              />
              {/* <Route path="xfc" element={<ProjectLoader />} /> */}
              
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </ColorModeToggler>
    );
  }
}

export default App;

// const ProjectLoader = ({ componentName, ...props }) => {
//   const DynamicComponent = lazy(() => import(`./projects/${componentName}`));
    
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <DynamicComponent {...props} />
//     </Suspense>
//   );
// };
