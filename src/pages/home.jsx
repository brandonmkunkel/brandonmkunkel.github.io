import React from "react";
import PageBody from "../components/page_body";
import ParticleBackground from "../components/particle_background"

const HomePage = () => {
  return (
    <PageBody>
      <div style={{position: "absolute", zIndex: 1}}>
        <h1>Hello World</h1>
        <h2>Brandon Kunkel</h2>
        <h2>I'll help you connect the dots</h2>
      </div>

      <ParticleBackground />
    </PageBody>
  );
};

export default HomePage;
