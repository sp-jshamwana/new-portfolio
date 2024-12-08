import React, { useState} from "react";
import projects from "../data/projects";
import "../styles/Projects.css";
import ProjectCard from "./ProjectCard";
import LoomModal from "./LoomEmbed";

const Projects = () => {
  const [activeDemoVideo, setActiveDemoVideo] = useState(null);

  const handleDemoClick = (demoVideo) => {
    setActiveDemoVideo(demoVideo);
  };

  const handleModalClose = () => {
    setActiveDemoVideo(null);
  };

  return (
    <section id="projects" className="pt-6 pb-14 bg-gray-100">
      <div className="container mx-auto px-10">
        <h1 className="text-2xl text-center mb-8">Technical Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onDemoClick={handleDemoClick}
            />
          ))}
        </div>
      </div>
      {activeDemoVideo && <LoomModal embedId={activeDemoVideo} onCancel={handleModalClose} isModalOpen={!!activeDemoVideo} />}
    </section>
  );
};

export default Projects;
