import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} TAme Blog. All rights reserved.</p>
                <div className="footer-links">
                    <a href="https://github.com/t_ame" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
