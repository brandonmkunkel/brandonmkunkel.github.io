import { z, defineCollection } from 'astro:content'

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    link: z.string().optional(),
    description: z.string().optional(),
    github: z.string().optional(),
    imageSrc: image().optional(),
    imageAlt: z.string().optional(),
  }),
})

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date().optional(),
    description: z.string().optional(),
  }),
})

export const collections = {
  projects: projectsCollection,
  blog: blogCollection,
}
