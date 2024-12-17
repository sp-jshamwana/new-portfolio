import React from "react";
import { Modal } from 'antd';

const LoomEmbed = ({ embedId }) => {
  const loomUrl = `https://www.loom.com/embed/${embedId}`;

  return (
    <div style={{ position: "relative", paddingBottom: "62.5%", height: 0 }}>
      <iframe
        src={loomUrl}
        frameBorder="0"
        webkitAllowFullScreen
        mozAllowFullScreen
        allowFullScreen
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        title="Loom Video"
      ></iframe>
    </div>
  );
};

const LoomModal = ({ embedId, isModalOpen, onCancel }) => {
  return (
    <div>
      <Modal
        open={isModalOpen}
        onCancel={onCancel}
        footer={null}
        width="80%"
      >
        <LoomEmbed embedId={embedId} />
      </Modal>
    </div>
  );
};

const YouTubeEmbed = ({ embedId }) => {
  return (
    <div style={{ position: "relative", paddingBottom: "62.5%", height: 0 }}>
      <iframe 
        src={embedId} 
        frameBorder="0"
        webkitAllowFullScreen
        mozAllowFullScreen
        allowFullScreen
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        title="YouTube Video"
      ></iframe>
    </div>
  );
};

const YouTubeModal = ({ embedId, isModalOpen, onCancel }) => {
  return (
    <div>
      <Modal
        open={isModalOpen}
        onCancel={onCancel}
        footer={null}
        width="80%"
      >
        <YouTubeEmbed embedId={embedId} />
      </Modal>
    </div>
  );
};

export { LoomModal, YouTubeModal };
