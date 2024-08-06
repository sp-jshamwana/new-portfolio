import React, { useState } from 'react';
import { Collapse } from "antd";
import '../styles/Internship.css';

const { Panel } = Collapse;

const InternshipExperience = () => {
    return (
        <section id="internships" className="pt-12 pb-14 bg-gray-100">
            <div className="border-t-2 border-gray-300 my-8"></div>
            <div className="container mx-auto px-10">
                <h1 className="text-2xl text-center mb-8 mt-20">Internship Experience</h1>
                <p className="m-12 text-lg text-center max-w-3xl mx-auto">
                    This summer, I was a Growth Engineering Intern @ SiPhox Health. 
                    SiPhox is revolutionizing healthcare by making at-home blood testing more reliable, 
                    comprehensive and accessible. 
                </p>
                <Collapse className="custom-collapse max-w-5xl mx-auto rounded-lg shadow-md mb-16">
                    <Panel header={<h2 className="text-xl">What were my goals?</h2>} key="1">
                        <p className="p-4">My top-level objective was to design, build, and market a freemium product that would get more people into the top of SiPhox Health's funnel to be converted later.</p>
                    </Panel>
                    <Panel header={<h2 className="text-xl">What did I achieve?</h2>} key="2">
                        <p className="pb-4">The things I produced:</p>
                        <ol>
                            <li>A tool that automatically extracts blood test results from a PDF and formats it in the way our records are stored in the database.</li>
                            <li>A designated landing page for freemium users.</li>
                            <li>An SOP for handling reports submitted by non-paying users.</li>
                            <li>Marketing materials for Meta, Google, Twitter, and Reddit.</li>
                        </ol>
                        <p className="pb-4 pt-4">The impact of those things:</p>
                        <ol>
                            <li>To-date, 200+ people have used the PDF-parsing tool and are now on SiPhox's platform and mailing list. I don't have access to the conversion rate of free users to paying customers.</li>
                        </ol>
                    </Panel>
                    <Panel header={<h2 className="text-xl">What skills did I learn?</h2>} key="3">
                        <ol>
                            <li className="p-2">Product launch strategy: I learned how to launch a feature (from private Beta to full launch), including paid ads, content marketing, forum engagement, and email marketing. </li>
                            <li className="p-2">Documentation: this goes beyond documenting code, but also documenting your process, and being an interna and external evangelist for your feature.</li>
                            <li className="p-2">Full-stack web development: I'm a lot more confident in my dev skills now and can take on the end-to-end implementation of features. I mainly worked with the MERN stack, but also wrote lots of Python code in the backend.</li>
                            <li className="p-2">Cloud computing: A lot of my work involved AWS, from working with S3 Buckets and Lambda functions to using Amazon APIs like 'Textract.'</li>
                        </ol>
                    </Panel>
                    <Panel header={<h2 className="text-xl">What should I have done differently?</h2>} key="4">
                        <p className="p-4"></p>
                    </Panel>
                    <Panel header={<h2 className="text-xl">Maxims and philosophies I picked up</h2>} key="5">
                        <ol className="p-4">
                            <li className="p-2">Default to speed</li>
                            <li className="p-2">Spend 1-2 hours more on early decisions</li>
                            <li className="p-2">Turn ChatGPT into your second brain</li>
                            <li className="p-2">Assume you'll embarrass yourself</li>
                            <li className="p-2">Be radically optimistic</li>
                        </ol>
                    </Panel>
                </Collapse>
                <div>
                    <h2 className="text-xl text-center mb-8">Product Demo</h2>
                    <div className="relative mx-auto" style={{ paddingBottom: '46.875%', height: 0, maxWidth: '75%' }}>
                        <iframe 
                            src="https://www.loom.com/embed/cf58b874538249bc91026d074a38fdde?sid=b80b045b-4cae-4240-8e0b-e294df733ede" 
                            webkitAllowFullScreen 
                            mozAllowFullScreen 
                            allowFullScreen 
                            className="absolute top-0 left-0 w-full h-full loomEmbed"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InternshipExperience;

