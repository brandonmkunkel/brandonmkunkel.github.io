import React, { lazy, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProjectsToImport } from '../pages/projectList'

const importProject = (project: string) =>
  lazy(() => import(`../pages/projects/${project}.tsx`))

// Render project programmtically from path parameter
export const ProjectPage = ({}) => {
  const params = useParams()
  const [projects, setProjects] = useState(new Map<string, React.ReactNode>())

  useEffect(() => {
    const importedProjects = new Map<string, React.ReactNode>()
    ProjectsToImport.forEach((project) => {
      if (!!project.slug) {
        const View = importProject(project.slug)
        importedProjects.set(project.slug, <View key={project.slug} />)
      }
    })
    setProjects(importedProjects)
  }, [])

  console.log(projects)

  return (
    <React.Suspense fallback="Loading project...">
      {!!projects.size && (
        <div>
          {projects.get(params.id ?? 'none') ??
            `Project "${params.id}" not found`}
        </div>
      )}
    </React.Suspense>
  )
}

export default ProjectPage
