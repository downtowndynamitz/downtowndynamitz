import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Player.css';

const Player = ({ player }) => {
    const [isActive, setisActive] = useState(false)
    const flipcard = () =>{
        setisActive(!isActive);
    }
    return (
        <div className={`player-card tablecards ${isActive ? 'addflip' : ''}`} onClick={flipcard}>
            <Link to={`/team/${player.id}`}>
                <img src={player.photo || "assets/images/teammembers/default.png"} alt={`${player.name}`} className="player-photo" />
                <h2>{player.name}</h2>
            </Link>
            <p>Role: {player.role}</p>
            
        </div>
    );
};

export default Player;
