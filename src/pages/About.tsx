import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
    return (
        <div className="about">
            <h1>About Me</h1>
            <div className="about-content">
                <p>
                    Welcome to my blog! I'm TAme, a passionate developer who loves to explore
                    new technologies and share knowledge.
                </p>
                <p>
                    This blog is built with React for the frontend and uses Python for static
                    site generation. I write all my posts in Markdown and use KaTeX for rendering
                    mathematical formulas.
                </p>
                <h2>My Interests</h2>
                <ul>
                    <li>Web Development</li>
                    <li>Machine Learning</li>
                    <li>Mathematics</li>
                    <li>Open Source Software</li>
                </ul>
                <h2>Contact</h2>
                <p>
                    Feel free to reach out to me on <a href="https://github.com/t_ame" target="_blank" rel="noopener noreferrer">GitHub</a>.
                </p>
            </div>
        </div>
    );
};

export default About;
