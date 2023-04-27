import React, {lazy, useEffect, useState} from "react";
import { useParams } from "react-router-dom";

const importProject = (project) => lazy(() => import(`../projects/${project}`));

const projectsToImport = [
  "auto_call",
  "kaggle",
]

// Render project programmtically from path parameter
export const ProjectPage = ({ }) => {
  let params = useParams();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function loadProjects() {
      const componentPromises =
      projectsToImport.map(async (projectName) => {
          const View = await importProject(projectName);
          return <View key={projectName} />;
        });

      Promise.all(componentPromises).then(setProjects);
    }

    loadProjects();
  }, []);
  
  return (
    <React.Suspense fallback='Loading project...'>
      <div>{projects.find((project) => project.key === params.id) ?? "Project not found"}</div>
    </React.Suspense>
  );
};

export default ProjectPage;
