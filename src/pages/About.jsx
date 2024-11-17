// src/pages/About.jsx
import React from 'react';
import { SiNotion } from 'react-icons/si';

import {
    FaGraduationCap, FaBriefcase, FaLaptopCode, FaLightbulb, FaMusic,
    FaReact, FaBootstrap, FaNodeJs, FaJava, FaGitAlt, FaFigma,
    FaGithub, FaHtml5, FaCss3Alt, FaJs
} from 'react-icons/fa';
import {
    SiTailwindcss, SiNextdotjs, SiTypescript, SiExpress, SiMongodb,
    SiMysql, SiFirebase, SiPostman, SiCanva, SiVisualstudiocode
} from 'react-icons/si';

import './About.css';


const About = () => {
    const personalInfo = [
        { icon: <FaGraduationCap />, label: 'Education', detail: 'Bachelor of Computer Applications' },
        { icon: <FaBriefcase />, label: 'Experience', detail: 'Intern  at Luminar Technolab' },
        { icon: <FaLaptopCode />, label: 'Skills', detail: 'Project-based Knowledge in Full Stack Web Development' },
        { icon: <FaLightbulb />, label: 'Expertise', detail: 'Frontend Development ' },
        { icon: <FaMusic />, label: 'Hobbies', detail: 'Listening to Bollywood Classics ' }
    ];

    const technologies = {
        Frontend: [
            { icon: <FaReact style={{ color: '#61DAFB' }} />, name: 'React' },
            { icon: <FaBootstrap style={{ color: '#7952B3' }} />, name: 'Bootstrap' },
            { icon: <SiTailwindcss style={{ color: '#38B2AC' }} />, name: 'Tailwind CSS' },
    
            { icon: <FaHtml5 style={{ color: '#E34F26' }} />, name: 'HTML' },
            { icon: <FaCss3Alt style={{ color: '#1572B6' }} />, name: 'CSS' },
            { icon: <FaJs style={{ color: '#F7DF1E' }} />, name: 'JavaScript' },
        ],
        Backend: [
            { icon: <FaNodeJs style={{ color: '#339933' }} />, name: 'NodeJS' },
            { icon: <SiExpress style={{ color: '#000000' }} />, name: 'ExpressJS' },
            { icon: <FaJs style={{ color: '#F7DF1E' }} />, name: 'JavaScript' },
            { icon: <FaJava style={{ color: '#007396' }} />, name: 'Java' }
        ],
        Database: [
            { icon: <SiMongodb style={{ color: '#47A248' }} />, name: 'MongoDB' },
            { icon: <SiMysql style={{ color: '#4479A1' }} />, name: 'MySQL' },
        ],
        Tools: [
            { icon: <FaGitAlt style={{ color: '#F05032' }} />, name: 'Git' },
            { icon: <FaFigma style={{ color: '#F24E1E' }} />, name: 'Figma' },
            { icon: <SiPostman style={{ color: '#FF6C37' }} />, name: 'Postman' },
            { icon: <SiCanva style={{ color: '#00C4CC' }} />, name: 'Canva' },
            { icon: <SiVisualstudiocode style={{ color: '#0078D7' }} />, name: 'VS Code' },
            { icon: <FaGithub style={{ color: '#181717' }} />, name: 'GitHub' }
        ]
    };

    return (
        <section className="about-section" id="about">
            <div className="about-content">
                <h3 className="about-title">About myself</h3>
                <h1 className="about-heading">Passionate Full Stack Web Developer | Focused on Frontend Innovation</h1>
                <ul className="about-list">
                    {personalInfo.map((info, index) => (
                        <li key={index}>
                            {info.icon} <strong>{info.label}:</strong> {info.detail}
                        </li>
                    ))}
                </ul>
                <div className="button-group">
                    <button className="button resume-button" onClick={() => window.open('/public/Blue Simple Professional CV Resume.pdf', '_blank')}>Resume</button>
                    <button className="button projects-button" onClick={() => window.open('/projects', '_self')}>Browse Projects</button>
                </div>
            </div>
            <div className="about-image">
                <img src="/FARIZKS.png" alt="Fariz KS Profile Picture" className="profile-img" />
            </div>

            {/* Technologies Section */}
            <div className="technologies-section">
                <h3 className="technologies-title">Technologies I Mainly Work With..</h3>
                {Object.entries(technologies).map(([category, techs], index) => (
                    <div className="technology-category" key={index}>
                        <h4>{category}</h4>
                        <div className="technology-list">
                            {techs.map((tech, idx) => (
                                <span key={idx}>{tech.icon} {tech.name}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;
