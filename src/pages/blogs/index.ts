export type BlogProps = {
  title: string
  shortDescription: string
  link: string
  imageSrc?: string
  imageAlt?: string
}

export const PlaceholderImage = 'https://via.placeholder.com/300'

export const BlogsToImport: BlogProps[] = [
  { title: 'example', shortDescription: 'coming soon', link: 'asdf' },
  { title: 'example', shortDescription: 'coming soon', link: 'asdf' },
  { title: 'example', shortDescription: 'coming soon', link: 'asdf' },
]
