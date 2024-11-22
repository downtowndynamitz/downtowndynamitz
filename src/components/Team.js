import React from 'react';
import Player from './Player';
import './Team.css';

const Team = ({ players }) => {
    return (
        <div className="team">
            <h1>Meet the Team</h1>
            <div className="player-grid">
                {players.map(player => (
                    <Player key={player.name} player={player} />
                ))}
            </div>
        </div>
    );
};

export default Team;
