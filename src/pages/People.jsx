import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { Popover } from 'antd';
import peopleData from '../data/people';
import '../index.css';

const popoverStyle = {
  maxWidth: '400px',
};

const People = () => {
  const onlineWriters = peopleData.filter(person => person.onlineWriter);
  const nonOnlineWriters = peopleData.filter(person => !person.onlineWriter);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='bg-gray-100 min-h-screen'>
      <Navbar />
      <div className="container mx-auto py-12">
        <h1 className="text-4xl mb-8 text-center">People</h1>
        <div className="bg-yellow-100 p-6 rounded-md flex items-center mb-6 mx-4 md:mx-auto max-w-3xl">
          <FontAwesomeIcon icon={faLightbulb} className="text-yellow-600 text-2xl mr-3" />
          <p className="text-base text-center">
            "Although we can't choose our parents, we can choose whose children we'd like to be." - Seneca
          </p>
        </div>
        <div className="center text-center mb-8">
          <p>I got the idea for this page from <u><a href="https://www.hadardor.com/" target="_blank" rel="noopener noreferrer">Hadar Dor's</a></u> personal site.</p>
          <p>Here are some of the people I (mostly) admire:</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mx-4 mt-16">
          {nonOnlineWriters.map((person, index) => (
            <Popover
              key={index}
              content={person.context}
              trigger={'click'}
              overlayStyle={popoverStyle}
              overlayClassName="custom-popover"
            >
              <div className="bg-white p-4 rounded-md shadow-md text-center cursor-pointer w-full">
                <span className="text-black">
                  {person.name}
                </span>
              </div>
            </Popover>
          ))}
        </div>
        <div className="center text-center mb-8 mt-16">
          <p>Online writers</p>
          <p>I wanted to put many 'online writers' on this page, but it felt weird putting them in the section above.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mx-4 mt-16">
            {onlineWriters.map((person, index) => (
              <Popover
                key={index}
                content={person.context}
                trigger={'click'}
                overlayStyle={popoverStyle}
                overlayClassName="custom-popover"
              >
                <div className="bg-white p-4 rounded-md shadow-md text-center cursor-pointer w-full">
                  <span className="text-black">
                    {person.name}
                  </span>
                </div>
              </Popover>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;

