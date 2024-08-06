import React, { useState } from "react";
import "../styles/Projects.css";

const ProjectCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`projectCardContainer ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="projectCard">
        <div className="projectCardFront" style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="cardOverlay">
            <h3 className="cardTitle text-center">{project.title}</h3>
          </div>
        </div>
        <div className="projectCardBack">
          <div className="backContent flex flex-col h-full justify-between">
            <div className="mt-8">
              <p className="text-lg font-bold">{project.title}</p>
              <p className="text-md font-bold text-orange-950">{project.category}</p>
            </div>
            <div className="flex-grow">
              <p className="m-4">{project.tools}</p>
              <p className="description">{project.description}</p>
            </div>
            <a href={project.link} className="button mb-4">View Project</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

