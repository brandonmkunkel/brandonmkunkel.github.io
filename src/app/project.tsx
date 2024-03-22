import React, { lazy, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const importProject = (project: string) =>
  lazy(() => import(`../projects/${project}`))

const projectsToImport = ['autoCall', 'xfc', 'nasaStudentLaunch']

// Render project programmtically from path parameter
export const ProjectPage = ({}) => {
  let params = useParams()
  const [projects, setProjects] = useState<Map<string, React.ReactNode>>([])

  useEffect(() => {
    async function loadProjects() {
      const componentPromises = projectsToImport.map(async (projectName) => {
        const View = await importProject(projectName)
        return <View key={projectName} />
      })

      Promise.all(componentPromises).then(setProjects)
    }

    loadProjects()
  }, [])

  return (
    <React.Suspense fallback="Loading project...">
      <div>
        {projects[params.id] ??
          'Project not found'}
      </div>
    </React.Suspense>
  )
}

export default ProjectPage
