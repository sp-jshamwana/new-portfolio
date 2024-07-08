import React, { useState } from "react";
import { Card } from "antd";
import "../styles/Projects.css";

const ProjectCard = ({ project }) => {
    return (
        <div className="projectCardContainer">
            <Card
                className="projectCard"
                hoverable
                style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '450px' }}
            >
                <div className="cardOverlay">
                    <h3 className="cardTitle text-center">{project.title}</h3>
                </div>
            </Card>
        </div>
    )
}

export default ProjectCard;