import React from "react";
import useTypewriter from "../hooks/useTypewriter";

export default function About() {
  const typewriterText = useTypewriter([
    " build products.",
    " run marathons.",
    " write blog posts.",
    " make art.",
  ]);

  return (
    <section id="about" className="min-h-196 flex items-center justify-center px-5 py-20">
      <div className="container max-w-5xl bg-white shadow-lg rounded-lg p-16 m-6 flex flex-col md:flex-row items-center">
        <div className="md:w-3/5 md:pr-8 mb-16 md:mb-0 text-center md:text-left">
          <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-black">
            Hello ello ello.
          </h1>
          <p className="text-xl sm:text-3xl whitespace-nowrap">
            I'm <span className="text-purple-800">Jonathan</span> and I{typewriterText}
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            className="object-cover object-center rounded-full shadow-3xl"
            alt="Portrait of Jonathan"
            src="/images/headshot.jpeg"
            style={{ width: '250px', height: '250px' }}
          />
        </div>
      </div>
    </section>
  );
}

