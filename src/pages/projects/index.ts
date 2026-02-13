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
    title: 'Personal Recipes Site',
    link: 'recipes',
  },
  {
    title: 'Explainable Fuzzy Competition - 2021',
    link: 'xfc',
    imageSrc: xfcImage,
  },
  // {
  //   title: 'AutoCall app - 2019',
  //   link: 'auto_call',
  // },
  // {
  //   title: 'NASA Student Launch - 2017',
  //   link: 'nasa_student_launch',
  // },
]
