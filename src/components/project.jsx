import React from "react";
import { Paper } from "@mui/material";

// Stateless project component
export const Project = ({title, text, image}) => {
  return (
    <Paper>
      <img src={image} alt=""></img>
      <h2>{title}</h2>
      
      <div>
        {text}
      </div>
      
      
    </Paper>
  );
      
};

export default Project;
