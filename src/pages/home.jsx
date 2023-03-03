import React from "react";
import PageBody from "../components/page_body";
import ParticleBackground from "../components/particle_background"

import { useTheme } from '@mui/material/styles';

const HomePage = () => {
  const theme = useTheme();

  return (
    <PageBody>
      <div style={{position: "absolute", zIndex: 1}}>
        <h1>Hello World, I'm Brandon Kunkel</h1>
        <h2>Polyglot Software Engineer</h2>
        <h2>I'll help you connect the dots</h2>
      </div>

      <ParticleBackground theme={theme} />
    </PageBody>
  );
};

export default HomePage;
