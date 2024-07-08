import React from 'react';
import { SocialIcon } from 'react-social-icons';
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="footer-top flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="trademark mb-4 md:mb-0">
            <p>&copy; 2024 Jonathan Shamwana. All Rights Reserved.</p>
          </div>
          <div className="social-icons mb-4 md:mb-0">
            <a href="https://linkedin.com/in/shamwana" target="_blank" rel="noopener noreferrer">
                <SocialIcon network="linkedin" />
            </a>
            <a href="https://instagram.com/jonathanshamwana" target="_blank" rel="noopener noreferrer">
                <SocialIcon network="instagram" />
            </a>
            <a href="https://x.com/JonathanSh42139" target="_blank" rel="noopener noreferrer">
                <SocialIcon network="twitter" />
            </a>
          </div>
          <div className="newsletter">
            <form className="flex items-center">
              <input type="email" placeholder="Your email" className="p-2 rounded-l bg-gray-700 text-white focus:outline-none" />
              <button type="submit" className="p-2 bg-purple-700 text-white rounded-r hover:bg-purple-800 focus:outline-none">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
