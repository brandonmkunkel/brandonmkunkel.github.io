import React from "react";
import PageBody from "../layouts/page_body";
import ParticleBackground from "../components/particle_background"

import { useTheme } from '@mui/material/styles';
import { Box } from "@mui/system";

const HomePage = () => {
  const theme = useTheme();

  return (
    <PageBody>
      <Box
        sx={{
          padding: { xs: 0, sm: 1 },
        }}
      >
        <h1>Hello World</h1>
        <h2>Polyglot Software Engineer</h2>
        <h2>I'll help you connect the dots</h2>
      </Box>

      <ParticleBackground theme={theme} />
    </PageBody>
  );
};

export default HomePage;
