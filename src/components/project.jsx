import React from "react";

// Stateless project component
const Project = ({title, text, image}) => {
  return (
    <div>
      <h2>{title}</h2>
      
      <div>
        {text}
      </div>
      
      <img src={image}></img>
    </div>
  );
};

export default ResumePage;
