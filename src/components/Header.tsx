import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-content">
                <Link to="/" className="logo">
                    TAme Blog
                </Link>
                <nav className="nav">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <a href="https://github.com/t_ame" className="nav-link" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
