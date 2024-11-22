import React from 'react';
import { useParams } from 'react-router-dom';
import players from '../data/players';
import Playerstats from './Playerstats';


const PlayerDetails = () => {
    const { playerName } = useParams();
    const player = players.find(p => p.id === playerName);
    if (!player) {
        return <h2>Player not found</h2>;
    }

    return (
        <>
        <div className='container'>
        <div className='player-details'>
            <img src={player.photo} alt={`${player.name}`} className="player-photo" />
            <h2>{player.name}</h2>
            <p>Role: {player.role}</p>
            <p>Batting Style: {player.battingStyle}</p>
            <p>Bowling Style: {player.bowlingStyle}</p>
        </div>
       
        <div className='playerstatsmaingrid'>
           

        
            <Playerstats bthmatches={player.bthmatches}  huplmatches={player.huplmatches} /> 
     
        </div>  
        </div> 
            {/* Add more stats as needed */}
       
         
        </>
    );
};

export default PlayerDetails;
