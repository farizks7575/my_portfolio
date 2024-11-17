// Projects.js
import React from 'react';
import './Project.css';
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJs } from 'react-icons/fa';
import { SiCss3, SiExpress, SiMongodb } from 'react-icons/si';

const Projects = () => {
    return (
        <section className="projects-section">
            <h3>My Projects</h3>
            <h2>What I've Built</h2>
            <div className="projects-grid">
                {/* Project Card 1 */}
                <div className="project-card">
                    <h3>Pocket Grub
                    </h3>
                    <p>Delicious Eats, Right in Your Pocket</p>
                    <div className="tech-icons">
                        <FaHtml5 title="React" />
                        <FaCss3 title="Express.js" />
                        
                    </div>
                    <img src="https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_1280.jpg" alt="PixelStack Project" />
                    <p>Developed a Food Discovery Platform that enables users to explore and indulge in a variety of delicious meals.</p>
                    <div className="card-buttons">
                        <a href="https://github.com/farizks7575/Oder-Food" className="github-button" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://farizks7575.github.io/Oder-Food/" className="demo-button" target="_blank" rel="noopener noreferrer">Live Demo</a>
                    </div>
                </div>

                {/* Project Card 2 */}
                <div className="project-card">
                    <h3>Book World</h3>
                    <p>Discover and Explore the World of Books</p>
                    <div className="tech-icons">
                    <FaHtml5 title="React" />
                    <FaCss3 title="Express.js" />
                    </div>
                    <img src="https://images.pexels.com/photos/877971/pexels-photo-877971.jpeg?auto=compress&cs=tinysrgb&w=600" alt="EventGuru Project" />
                    <p>Created a website called "Book World" where users can discover and purchase a diverse range of books.

</p>
                    <div className="card-buttons">
                        <a href="https://github.com/farizks7575/BooksWorld" className="github-button" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://farizks7575.github.io/BooksWorld/" className="demo-button" target="_blank" rel="noopener noreferrer">Live Demo</a>
                    </div>
                </div>

                {/* Additional Project Cards */}
                {/* Duplicate project card for demonstration */}
                {/* Project Card 3 */}
                <div className="project-card">
                    <h3>Brew Bean</h3>
                    <p>Awaken Your Senses with Every Sip</p>
                    <div className="tech-icons">
                    <FaHtml5 title="React" />
                    <FaCss3 title="Express.js" />
                    </div>
                    <img src="https://images.pexels.com/photos/27539835/pexels-photo-27539835/free-photo-of-a-cup-of-coffee-with-a-cookie-on-top.jpeg?auto=compress&cs=tinysrgb&w=600" alt="EventGuru Project" />
                    <p>Created "Brew Bean," a website that helps users explore various coffee blends and brewing techniques.</p>
                    <div className="card-buttons">
                        <a href="https://github.com/farizks7575/Cofee" className="github-button" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://farizks7575.github.io/Cofee/" className="demo-button" target="_blank" rel="noopener noreferrer">Live Demo</a>
                    </div>
                </div>


                {/* Project Card 4 */}
                <div className="project-card">
                    <h3>Travel Blog</h3>
                    <p> Journey Beyond Boundaries</p>
                    <div className="tech-icons">
                    <FaHtml5 title="React" />
                    <FaCss3 title="Express.js" />
                    <FaJs title="Express.js" />
                    </div>
                    <img src="https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg" alt="EventGuru Project" />
                    <p>Created a Travel Blog that encourages users to discover exciting new travel destinations.

</p>
                    <div className="card-buttons">
                        <a href="https://github.com/farizks7575/Travel_Blog" className="github-button" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://farizks7575.github.io/Travel_Blog/" className="demo-button" target="_blank" rel="noopener noreferrer">Live Demo</a>
                    </div>

                    
                </div>

                {/* 5 */}
<div className="project-card">
                    <h3>Discount Calculator</h3>
                    <p>Discover Savings with Every Calculation</p>
                    <div className="tech-icons">
                    <FaHtml5 title="React" />
                    <FaCss3 title="Express.js" />
                    <FaReact title="Express.js" />
                    </div>
                    <img src="https://images.pexels.com/photos/220301/pexels-photo-220301.jpeg?auto=compress&cs=tinysrgb&w=600" alt="EventGuru Project" />
                    <p>Developed a discount calculator that helps users uncover savings on their purchases.</p>
                    <div className="card-buttons">
                        <a href="https://github.com/farizks7575/Discount_Calculator" className="github-button" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://snazzy-trifle-15ce57.netlify.app/" className="demo-button" target="_blank" rel="noopener noreferrer">Live Demo</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
