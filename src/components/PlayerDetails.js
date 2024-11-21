import React from 'react';
import { useParams } from 'react-router-dom';
import players from '../data/players';

const PlayerDetails = () => {
    const { playerName } = useParams();
    const player = players.find(p => p.id === playerName);

    if (!player) {
        return <h2>Player not found</h2>;
    }

    return (
        <div className="player-details">
            <img src={player.photo} alt={`${player.name}`} className="player-photo" />
            <h2>{player.name}</h2>
            <p>Role: {player.role}</p>
            <p>Batting Style: {player.battingStyle}</p>
            <p>Bowling Style: {player.bowlingStyle}</p>
            <h3>Statistics</h3>
            <p>Matches: {player.stats.matches}</p>
            <p>Runs: {player.stats.runs}</p>
            <p>Wickets: {player.stats.wickets}</p>
            {/* Add more stats as needed */}
        </div>
    );
};

export default PlayerDetails;