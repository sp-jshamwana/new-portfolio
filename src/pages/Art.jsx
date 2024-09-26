import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ArtworkCard from "../components/ArtworkCard";
import projects from "../data/art";
import { Modal } from 'antd';
import 'antd/dist/reset.css';

const Art = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
      window.scrollTo(0, 0);
  }, []);

    const handleOk = () => {
        setSelectedProject(null);
    };

    const handleCancel = () => {
        setSelectedProject(null);
    };

    return (
        <div className="bg-gray-100 min-h-screen">
          <Navbar />
          <div className="container mx-auto py-12">
            <h1 className="text-4xl mb-8 text-center">Art</h1>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
              {projects.map((project, index) => (
                <ArtworkCard
                  key={index}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </div>
          <Modal
            open={!!selectedProject}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
            width="80%"
          >
            {selectedProject?.modalType === 'pdf' ? (
              <iframe
                src={selectedProject.content}
                width="100%"
                height="800px"
                title={selectedProject.title}
              />
            ) : selectedProject?.modalType === 'video' ? (
              <iframe
                width="100%"
                height="500px"
                src={selectedProject.content}
                title={selectedProject.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : selectedProject?.modalType === 'audio' ? (
              <audio controls style={{ width: '100%' }}>
                <source src={selectedProject.content} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            ) : null}
          </Modal>
        </div>
      );
    };
    
export default Art;
