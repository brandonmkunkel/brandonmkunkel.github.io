import * as React from "react";
import { Card } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";

// Stateless project component
export const Project = ({ title, imageSrc, imageAlt, route }) => {
  return (
    <Link to={route} component={RouterLink} style={{ textDecoration: "none" }}>
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
