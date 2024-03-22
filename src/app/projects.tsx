import Box from '@mui/material/Box'
import PageBody from '../components/pageBody'
import Project from '../components/projectCard'

type ProjectCardDetails = {
  imageSrc: string
  imageAlt?: string
  title: string
  slug: string
}

const placeholderImage = 'https://via.placeholder.com/300'

const projects: ProjectCardDetails[] = [
  {
    imageSrc: placeholderImage,
    title: 'AutoCall app',
    slug: 'auto_call',
  },
  {
    imageSrc: placeholderImage,
    title: 'ML Apis',
    slug: 'ml_apis',
  },
  {
    imageSrc: placeholderImage,
    title: 'Explainable Fuzzy Competition',
    slug: 'xfc',
  },
  {
    imageSrc: placeholderImage,
    title: 'NASA Student Launch - Computer Vision',
    slug: 'nasa_student_launch',
  },
]

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
        {projects.map((project: ProjectCardDetails) => (
          <Project
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
