import * as React from "react";
import { Card, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

// Stateless project component
export const Project = ({ title, imageSrc, imageAlt, slug }) => {
  return (
    <Link to={`projects/${slug}`} component={RouterLink} style={{ textDecoration: "none" }}>
      <Card
        className="project-container"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          sx={{
            maxWidth: "100%",
            aspectRatio: 1,
            display: "block",
          }}
        />
        <div
          sx={{
            marginTop: 10,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {title}
        </div>
      </Card>
    </Link>
  );
};

export default Project;
