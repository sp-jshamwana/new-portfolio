import React, { useState, useEffect } from "react";
import useTypewriter from "../hooks/useTypewriter";
import '../styles/About.css'

const VIDEO_SOURCES = [
  "/videos/drawing.mov",
  "/videos/running.mov",
  "/videos/ba-bus.mp4",
  "/videos/coffee-pour.mp4",
  "/videos/museum-pose.mp4",
];

export default function About() {
  const [isHovered, setIsHovered] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);

  const typewriterText = useTypewriter([
    " build products.",
    " run ultra-marathons",
    " write blog posts",
    " make art",
    " love to dress up"
  ]);

  useEffect(() => {
    VIDEO_SOURCES.forEach((src) => {
      const video = document.createElement('video');
      video.src = src;
      video.preload = "auto";
    });
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setVideoIndex((prev) => (prev + 1) % VIDEO_SOURCES.length);
  };

  return (
    <section id="about" className="min-h-196 flex items-center justify-center px-5 pt-20 pb-10 bg-gray-100">
      <div className="container max-w-5xl bg-white shadow-lg rounded-lg p-16 m-6 flex flex-col md:flex-row items-center about-container">
        <div className="md:w-3/5 md:pr-8 mb-16 md:mb-0 text-center md:text-left">
          <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-black hero-heading">
            Hello ello ello.
          </h1>
          <p className="text-xl sm:text-3xl whitespace-nowrap typewriter-text">
            I'm <span className="text-purple-800">Jonathan</span> and I{typewriterText}
          </p>
        </div>
        <div 
          className="md:w-1/2 flex justify-center md:justify-end video-container"
          onMouseEnter={() => handleMouseEnter()}
          onMouseLeave={() => handleMouseLeave()}
        >
          {isHovered ? (
            <video
              className="object-cover object-center rounded-full shadow-3xl"
              style={{ width: '250px', height: '250px' }}
              autoPlay
              loop
              muted
              preload="auto"
            >
              <source src={VIDEO_SOURCES[videoIndex]} />
            </video>
          ) : (
            <img
              className="object-cover object-center rounded-full shadow-3xl"
              alt="Portrait of Jonathan"
              src="/images/hero/headshot-purple.png"
              style={{ width: '250px', height: '250px' }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
