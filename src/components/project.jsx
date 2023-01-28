import React from "react";

// Stateless project component
export const Project = ({title, text, image}) => {
  return (
    <React.Fragment>
      <h2>{title}</h2>
      
      <div>
        {text}
      </div>
      
      <img src={image}></img>
    </React.Fragment>
  );
};

export default Project;
