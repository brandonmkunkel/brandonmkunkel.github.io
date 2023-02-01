import React from "react";
import { Paper } from "@mui/material";

// Stateless project component
export const Project = ({title, text, image}) => {
  return (
    <Paper className="project-container">
      <h2>{title}</h2>
      {/* <img src={image} alt=""></img> */}
      <div>
        {text}
      </div>
    </Paper>
  );
      
};

export default Project;
