import React, { lazy, useEffect, useState } from 'react'
import { useParams, Link as RouterLink } from 'react-router-dom'
import { ProjectsToImport,  } from '../pages/projects'
import PageBody from './pageBody'
import { Link, Typography } from '@mui/material'

const importProject = (project: string) =>
  lazy(() => import(`../pages/projects/${project}.tsx`))

// Render project programmtically from path parameter
export const ProjectRenderer = ({}) => {
  const params = useParams()
  const [projects, setProjects] = useState(new Map<string, React.ReactNode>())

  useEffect(() => {
    const importedProjects = new Map<string, React.ReactNode>()
    ProjectsToImport.forEach((project) => {
      if (!!project.link) {
        const View = importProject(project.link)
        importedProjects.set(project.link, <View key={project.link} />)
      }
    })
    setProjects(importedProjects)
  }, [])

  return (
    <React.Suspense fallback="Loading project...">
      {!!projects.size && (
        <div>
          {projects.get(params.id ?? 'none') ?? (
            <PageBody>
              <Typography>Project "{params.id}" does not exist.</Typography>
              <Link component={RouterLink} to={'..'}>
                Return to projects home
              </Link>
            </PageBody>
          )}
        </div>
      )}
    </React.Suspense>
  )
}

export default ProjectRenderer
