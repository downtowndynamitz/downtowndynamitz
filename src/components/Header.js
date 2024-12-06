import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './Header.css';
import getKey from '../data/players.json'

const Header = () => {
    const navigate = useNavigate(); 
    const handleAdminClick = () => { 
        const password = prompt('Please enter the admin password:'); 
        const correctPassword = getKey[0].projectsecret; 
        if (password === correctPassword) { 
            navigate('/admin'); 
        } else { 
            alert('Access denied'); 
        } 
    };
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
                            <li><a href="#" onClick={handleAdminClick}>Admin</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
