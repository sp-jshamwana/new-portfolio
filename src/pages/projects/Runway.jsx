import React from 'react';
import Header from '../../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

import '../../styles/Runway.css'

const RunwayProject = () => {
    return (
        <div>
            <Header />
            <section id="fashion-project">
                <div className="bg-yellow-100 p-6 rounded-md flex items-center mt-20 mb-20 mx-4 md:mx-auto max-w-4xl">
                    <FontAwesomeIcon icon={faLightbulb} className="text-yellow-600 text-2xl mr-3" />
                    <p className="text-base text-center">
                        The website is no longer live, so I threw up this old demo video to show you what it looked like.
                    </p>
                </div>
                <div className="relative mx-auto mt-50" style={{ paddingBottom: '46.875%', height: 0, maxWidth: '75%' }}>
                    <iframe
                        src="videos/irunway-demo.mp4"
                        webkitAllowFullScreen 
                        mozAllowFullScreen 
                        allowFullScreen 
                        className="absolute top-0 left-0 w-full h-full demo-video"
                    />
                </div>
            </section>
        </div>
    );
}

export default RunwayProject;