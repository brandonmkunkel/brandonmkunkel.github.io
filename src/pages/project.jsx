import React from "react";
import { useParams } from "react-router-dom";

// Render project programmtically from path parameter
export const ProjectPage = ({ }) => {
  let params = useParams();

  console.log(params);

  return <div></div>;
};

export default ProjectPage;
