import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'

import DrawerNavBar from './components/navBar'

import HomePage from './pages/home'
import AboutPage from './pages/about'
import ProjectRenderer from './components/projectRenderer'
import ProjectPage from './pages/project'
import ResumePage from './pages/resume'
import NotFoundPage from './pages/notFound'
import { ColorModeToggler } from './theme'
import BlogPage from './pages/blog'
import BlogRenderer from './components/blogRenderer'

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
            <Route index element={<ProjectPage />} />
            <Route path=":id" element={<ProjectRenderer />} />
          </Route>

          <Route path="blog">
            <Route index element={<BlogPage />} />
            <Route path=":id" element={<BlogRenderer />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </ColorModeToggler>
  )
}
