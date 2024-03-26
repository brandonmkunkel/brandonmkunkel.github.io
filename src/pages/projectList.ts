export type ProjectProps = {
  title: string
  imageSrc?: string
  imageAlt?: string
  slug?: string
  externalLink?: string
}

const placeholderImage = 'https://via.placeholder.com/300'

export const ProjectsToImport: ProjectProps[] = [
  {
    imageSrc: placeholderImage,
    title: 'ML Apis',
    slug: 'ml_apis',
  },
  {
    imageSrc: placeholderImage,
    title: 'AutoCall app',
    slug: 'auto_call',
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
