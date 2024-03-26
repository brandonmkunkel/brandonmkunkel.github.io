import Box from '@mui/material/Box'
import PageBody from '../components/pageBody'
import ProjectCard from '../components/projectCard'
import { ProjectsToImport, ProjectProps, PlaceholderImage } from './projects'

const ProjectPage = () => {
  return (
    <PageBody title="Projects">
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
          gridRowGap: { xs: 5, sm: 10 },
          gridColumnGap: { xs: 5, sm: 10 },
        }}
      >
        {ProjectsToImport.map((project: ProjectProps) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            link={project.link}
            imageSrc={project.imageSrc ?? PlaceholderImage}
            imageAlt={project.imageAlt}
          />
        ))}
      </Box>
    </PageBody>
  )
}

export default ProjectPage
