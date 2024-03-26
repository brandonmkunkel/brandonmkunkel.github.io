import { Stack } from '@mui/material'
import PageBody from '../components/pageBody'
import BlogCard from '../components/blogCard'
import { BlogProps, BlogsToImport, PlaceholderImage } from './blogs'

const BlogPage = () => {
  return (
    <PageBody title="Blog">
      <Stack direction="column" gap={2} alignContent={'center'}>
        {BlogsToImport.map((blog: BlogProps) => (
          <BlogCard
            key={blog.title}
            title={blog.title}
            link={blog.link ?? PlaceholderImage}
            shortDescription={blog.shortDescription}
            imageSrc={blog.imageSrc}
            imageAlt={blog.imageAlt}
          />
        ))}
      </Stack>
    </PageBody>
  )
}

export default BlogPage
