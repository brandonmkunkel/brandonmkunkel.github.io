import xfcImage from '../../assets/projects/xfc.png'

export type ProjectProps = {
  title: string
  link: string
  imageSrc?: string
  imageAlt?: string
}

export const PlaceholderImage = 'https://via.placeholder.com/300'

export const ProjectsToImport: ProjectProps[] = [
  {
    title: 'Explainable Fuzzy Competition',
    link: 'xfc',
    imageSrc: xfcImage,
  },
  // {
  //   title: 'AutoCall app',
  //   link: 'auto_call',
  // },
  // {
  //   title: 'NASA Student Launch - Computer Vision',
  //   link: 'nasa_student_launch',
  // },
]
