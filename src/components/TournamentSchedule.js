import React from 'react';
import './TournamentSchedule.css';

const TournamentSchedule = ({ title, matches }) => {
    return (
        <div className="tournament-schedule">
            <h2>{title}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Opponent</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {matches.map((match, index) => (
                        <tr key={index}>
                            <td>{match.date}</td>
                            <td>{match.opponent}</td>
                            <td>{match.location}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TournamentSchedule;
