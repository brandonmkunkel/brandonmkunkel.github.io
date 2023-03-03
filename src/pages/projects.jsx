import React from "react";
import Box from "@mui/material/Box";
import PageBody from "../components/page_body";
import Project from "../components/project";

const ProjectsPage = (Comp) => {
  let placeholderImage = "https://via.placeholder.com/300";
  return (
    <PageBody>
      <Box
        // container
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
        // sx={{
        //   display: "flex",
        //   flexWrap: "wrap",
        //   // flexDirection: "row",
        //   justifyContent: "space-evenly",
        // }}
      >
        <Project
          imageSrc={placeholderImage}
          imageAlt="Image alt text"
          title="AutoCall app"
          // route="/projects/autocall"
        />
        <Project
          imageSrc={placeholderImage}
          imageAlt="Image alt text"
          title="Kaggle Submissions"
          // route="/projects/kaggle"
        />
        <Project
          imageSrc={placeholderImage}
          imageAlt="Image alt text"
          title="Explainable Fuzzy Competition"
          // route="/projects/xfc"
        />
        <Project
          imageSrc={placeholderImage}
          imageAlt="Image alt text"
          title="NASA Student launch computer vision"
          // route="/projects/nasa-student-launch"
        />
      </Box>
    </PageBody>
  );
};

export default ProjectsPage;
