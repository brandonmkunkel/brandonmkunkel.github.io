import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'

import DrawerNavBar from './components/navBar'

import HomePage from './app/home'
import AboutPage from './app/about'
import ProjectsPage from './app/projects'
import ResumePage from './app/resume'
import NotFoundPage from './app/notFound'
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
            <Route path=":id" element={<ProjectsPage />} />
            {/* <Route path="xfc" element={<ProjectLoader />} /> */}
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </ColorModeToggler>
  )
}
