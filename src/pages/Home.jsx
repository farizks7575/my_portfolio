import React from 'react';
import './Home.css';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className="home-section">
            <img src="/FARIZKS.jpg" alt="Profile" className="profile-image" />
            <h2>Hello! I'm FARIZ KS</h2>
            <h1>Full Stack Web Developer</h1>
            <p>Full Stack Developer with a passion for frontend innovation and creating engaging user experiences..</p>
            <p>I'll help you build beautiful websites your users will love.</p>
            <div className="button-container">
                <Link to="about">
                    <button className="home-button">Know More</button>
                </Link>
                <Link to="contact">
                    <button className="home-button">Get in Touch</button>
                </Link>
            </div>

            {/* Social Icons Section */}
            <div className="home-social-icons">
                <a href="https://github.com/farizks7575" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="home-social-icon" />
                </a>
                <a href="https://www.linkedin.com/in/fariz-k-s-454541326/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="home-social-icon" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="home-social-icon" />
                </a>
                <a href="mailto:your-farizks7575@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope className="home-social-icon" />
                </a>
            </div>
        </section>
    );
};

export default Home;
