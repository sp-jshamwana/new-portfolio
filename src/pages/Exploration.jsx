import React from 'react'
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import photos from '../data/exploration';
import '../index.css';

const Exploration = () => {

    return (
        <div className="bg-site min-h-screen">
            <Navbar />
            <div className="container mx-auto py-12">
                <h1 className="text-4xl mb-8 text-center">Exploration</h1>
                <div className="bg-blue-100 p-6 rounded-2xl flex items-start mb-12 mx-4 md:mx-auto max-w-4xl">
                    <FontAwesomeIcon icon={faGlobe} className="text-purple-400 text-3xl mr-7 mt-3" />
                    <p className="text-base text-center">
                        Minerva University has a 'global rotation model', which means I get to study in <span className="paragraphHighlight">a different country each semester</span>. 
                        This has enabled me to <span className="paragraphHighlight">maximize exploration</span>--of cultures, cities, careers, and more. 
                        So these photos are a glimpse into my semester in <span className="paragraphHighlight">Seoul, South Korea. </span>  
                        I was in a marathon block at the time, so most days entailed waking up early to get in <span className="paragraphHighlight">10+ miles before 8am Calculus</span>.  
                    </p>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                    {photos.map((photo, index) => (
                        <div key={index} className="relative">
                            <img 
                                src={`/images/exploration/${photo.src}`} 
                                alt={`Photo ${index + 1} from Seoul`} 
                                className="w-full object-cover rounded-md shadow-lg explorationImage" 
                            />
                            <span className="absolute bottom-2 left-2 text-sm text-white bg-black bg-opacity-50 px-2 py-1 rounded-md">
                                {photo.caption}
                            </span>
                        </div>
                     ))}
                </div>
            </div>
        </div>
    );
}

export default Exploration;
