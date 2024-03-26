import React, { lazy, useEffect, useState } from 'react'
import { useParams, Link as RouterLink } from 'react-router-dom'
import { BlogsToImport } from '../pages/blogs'
import PageBody from './pageBody'
import { Link, Typography } from '@mui/material'

const importProject = (project: string) =>
  lazy(() => import(`../pages/projects/${project}.tsx`))

// Render project programmtically from path parameter
export const BlogRenderer = ({}) => {
  const params = useParams()
  const [projects, setProjects] = useState(new Map<string, React.ReactNode>())

  useEffect(() => {
    const importedBlogs = new Map<string, React.ReactNode>()
    BlogsToImport.forEach((blog) => {
      if (!!blog.link) {
        const View = importProject(blog.link)
        importedBlogs.set(blog.link, <View key={blog.link} />)
      }
    })
    setProjects(importedBlogs)
  }, [])

  return (
    <React.Suspense fallback="Loading blog...">
      {!!projects.size && (
        <div>
          {projects.get(params.id ?? 'none') ?? (
            <PageBody>
              <Typography>Project "{params.id}" does not exist.</Typography>
              <Link component={RouterLink} to={'..'}>
                Return to blog home
              </Link>
            </PageBody>
          )}
        </div>
      )}
    </React.Suspense>
  )
}

export default BlogRenderer
