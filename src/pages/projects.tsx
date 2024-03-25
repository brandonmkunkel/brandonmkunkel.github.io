import Box from '@mui/material/Box'
import PageBody from '../components/pageBody'
import Project from '../components/projectCard'
import { ProjectsToImport, ProjectCardDetails } from './projectList'

const ProjectsPage = () => {
  return (
    <PageBody title="Projects">
      <Box
        sx={{
          display: 'grid',
          padding: { xs: 0, sm: 1 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
          gridRowGap: { xs: 5, sm: 10 },
          gridColumnGap: { xs: 5, sm: 10 },
        }}
      >
        {ProjectsToImport.map((project: ProjectCardDetails) => (
          <Project
            key={project.title}
            imageSrc={project.imageSrc}
            imageAlt={project?.imageAlt ?? ''}
            title={project.title}
            slug={project.slug}
          />
        ))}
      </Box>
    </PageBody>
  )
}

export default ProjectsPage
