import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'

import DrawerNavBar from './components/navBar'

import HomePage from './pages/home'
import AboutPage from './pages/about'
import ProjectPage from './components/project_renderer'
import ProjectsPage from './pages/projects'
import ResumePage from './pages/resume'
import NotFoundPage from './pages/notFound'
import { ColorModeToggler } from './theme'

export default function App() {
  return (
    <ColorModeToggler>
      <CssBaseline />
      <Router basename="/">
        <DrawerNavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="resume" element={<ResumePage />} />
          <Route path="not_found" element={<NotFoundPage />} />

          <Route path="projects">
            <Route index element={<ProjectsPage />} />
            <Route path=":id" element={<ProjectPage />} />
            {/* <Route path="xfc" element={<ProjectLoader />} /> */}
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </ColorModeToggler>
  )
}
