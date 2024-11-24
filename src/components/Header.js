import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="banner">
                <img src="/assets/images/banner.png" alt="Cricket Banner" className="banner-image" />
                <div className="overlay">
                    <div className="logo-title">
                        <img src="/assets/images/current.jpg" alt="Downtown Dynamitz Logo" className="logo" />
                        <h1>Downtown Dynamitz Cricket Club</h1>
                    </div>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/team">Team</Link></li>
                            <li><Link to="/schedule">Schedule</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
