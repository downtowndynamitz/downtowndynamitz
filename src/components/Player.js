import React from 'react';
import { Link } from 'react-router-dom';
import './Player.css';

const Player = ({ player }) => {
    return (
        <div className="player-card">
            <Link to={`/team/${player.id}`}>
                <img src={player.photo} alt={`${player.name}`} className="player-photo" />
                <h2>{player.name}</h2>
            </Link>
            <p>Role: {player.role}</p>
            
        </div>
    );
};

export default Player;
