import React from "react";
import PageBody from "../components/page_body";
import ParticleBackground from "../components/particle_background"

const HomePage = () => {
  return (
    <PageBody>
        <div style={{position: "absolute", zIndex: 1}}>
        <h1>Hello World</h1>
        <div>Catchy tag line</div>
        <div>Put an image somewhere</div>
        <div>Some other thing</div>
      </div>

      <ParticleBackground />
    </PageBody>
  );
};

export default HomePage;
