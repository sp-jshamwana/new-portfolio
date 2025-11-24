import React from 'react';
import { SocialIcon } from 'react-social-icons';
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-site py-8">
      <div className="container mx-auto px-4">
        <div className="footer-top flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="trademark mb-4 md:mb-0">
            <p>&copy; 2025 Jonathan Shamwana. All Rights Reserved.</p>
          </div>
          {/* <div className="social-icons mb-4 md:mb-0">
            <a href="https://linkedin.com/in/shamwana" target="_blank" rel="noopener noreferrer">
                <SocialIcon network="linkedin" />
            </a>
            <a href="https://instagram.com/jonathanshamwana" target="_blank" rel="noopener noreferrer">
                <SocialIcon network="instagram" />
            </a>
            <a href="https://x.com/JonathanSh42139" target="_blank" rel="noopener noreferrer">
                <SocialIcon network="x" />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
