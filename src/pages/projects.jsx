import React from "react";
import PageBody from "../components/page_body";
import Project from "../components/project";

const ProjectsPage = (Comp) => {
  return (
    <PageBody>
      <Project 
        title="AutoCall app" 
      />
      <Project 
        title="Explainable Fuzzy Competition" 
      />
      <Project 
        title="NASA Student launch computer vision" 
      />
    </PageBody>
  );
};

export default ProjectsPage;
