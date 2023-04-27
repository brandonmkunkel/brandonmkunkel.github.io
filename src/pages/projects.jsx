import React from "react";
import Box from "@mui/material/Box";
import PageBody from "../layouts/page_body";
import Project from "../components/project";

const ProjectsPage = (Comp) => {
  let placeholderImage = "https://via.placeholder.com/300";
  return (
    <PageBody title="Projects">
      <Box
        sx={{
          display: "grid",
          padding: { xs: 0, sm: 1 },
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gridRowGap: { xs: 5, sm: 10 },
          gridColumnGap: { xs: 5, sm: 10 },
        }}
      >
        <Project
          imageSrc={placeholderImage}
          imageAlt="Image alt text"
          title="AutoCall app"
          slug="auto_call"
        />
        <Project
          imageSrc={placeholderImage}
          imageAlt="Image alt text"
          title="Kaggle Submissions"
          slug="kaggle"
        />
        <Project
          imageSrc={placeholderImage}
          imageAlt="Image alt text"
          title="Explainable Fuzzy Competition"
          slug="xfc"
        />
        <Project
          imageSrc={placeholderImage}
          imageAlt="Image alt text"
          title="NASA Student launch computer vision"
          slug="nasa_student_launch"
        />
      </Box>
    </PageBody>
  );
};

export default ProjectsPage;
