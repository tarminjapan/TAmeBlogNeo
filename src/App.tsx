import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import './styles/App.css';

const App: React.FC = () => {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div className="app-container">
                <Header />
                <main className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/post/:slug" element={<BlogPost />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
