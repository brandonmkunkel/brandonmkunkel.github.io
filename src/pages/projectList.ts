export type ProjectCardDetails = {
  imageSrc: string
  imageAlt?: string
  title: string
  slug: string
}

const placeholderImage = 'https://via.placeholder.com/300'

export const ProjectsToImport: ProjectCardDetails[] = [
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
