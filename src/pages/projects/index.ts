import xfcImage from '../../assets/projects/xfc.png'
import recipesImage from '../../assets/projects/recipes.jpg'

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
    link: 'https://brandonmkunkel.github.io/recipes',
    imageSrc: recipesImage,
  },
  {
    title: 'Explainable Fuzzy Competition - 2021',
    link: 'xfc',
    imageSrc: xfcImage,
  },
]
