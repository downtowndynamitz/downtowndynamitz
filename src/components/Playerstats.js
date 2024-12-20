import React from 'react';
import './TournamentSchedule.css';
import './Player.css';

const Playerstats = ({ bthmatches,huplmatches }) => { 
    const totalMatches = bthmatches.length + huplmatches.length
    const totalRuns = [...bthmatches, ...huplmatches]
    .reduce((total, match) => total + (match.batting?.runs || 0), 0);

const totalWickets = [...bthmatches, ...huplmatches]
    .reduce((total, match) => total + (match.bowling?.wickets || 0), 0);

const totalCatches = [...bthmatches, ...huplmatches]
    .reduce((total, match) => total + (match.fielding?.catches || 0), 0);

    const totalRunOutsAndStumpings = [...bthmatches, ...huplmatches].reduce((total, match) => { return total + (match.fielding?.stumpings || 0) + (match.fielding?.runOuts || 0); }, 0);
       return (
        <>      
                <div className='playerstatscardcontainer'>
                <div className="playerstatscard">
                <p>Total Matches</p>
                <p className='statsdata'>{totalMatches}</p>
                </div>
                <div className="playerstatscard">
                <p>Total Runs</p>
                <p className='statsdata'>{totalRuns}</p>
                </div>
                <div className="playerstatscard">
                <p>Total Wickets</p>
                <p className='statsdata'>{totalWickets}</p>
                </div>
                <div className="playerstatscard">
                <p>Total Catches</p>
                <p className='statsdata'>{totalCatches}</p>
                </div>
                <div className="playerstatscard">
                <p>RO/ST Catches</p>
                <p className='statsdata'>{totalRunOutsAndStumpings}</p>
                </div>
                </div>
        <div className="tournament-schedule playerstats">
            
            <h2>HUPL Series</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Opponent</th>
                        <th>Position</th>
                        <th>Runs</th>
                        <th>Wickets</th>
                        <th>Catches</th>
                        <th>Stumps/Runouts</th>
                    </tr>
                </thead>
                <tbody>
                        {huplmatches.map((hupl, index) => (
                        <tr key={hupl.matchId}>
                            <td>{hupl.matchDate}</td>
                            <td>{hupl.opponent}</td>
                            <td>{hupl.batting.position}</td>
                            <td>{hupl.batting.runs} ({hupl.batting.ballsFaced}) </td>
                            <td>{hupl.bowling.overs}/{hupl.bowling.wickets}({hupl.bowling.runsConceded})</td>
                            <td>{hupl.fielding.catches}</td>
                            <td>{hupl.fielding.stumpings}/{hupl.fielding.runOuts}</td>
                        </tr>
                        ))}
                
                </tbody>
            </table>

            <h2>BTH Series</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Opponent</th>
                        <th>Position</th>
                        <th>Runs</th>
                        <th>Wickets</th>
                        <th>Catches</th>
                        <th>Stumps/Runouts</th>
                    </tr>
                </thead>
                <tbody>
                    {bthmatches.map((bth,index) => (
                        <tr key={bth.matchId}>
                            <td>{bth.matchDate}</td>
                            <td>{bth.opponent}</td>
                            <td>{bth.batting.position}</td>
                            <td>{bth.batting.runs} ({bth.batting.ballsFaced}) </td>
                            <td>{bth.bowling.overs} - {bth.bowling.wickets} - {bth.bowling.runsConceded}</td>
                            <td>{bth.fielding.catches}</td>
                            <td>{bth.fielding.stumpings}-{bth.fielding.runOuts}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    );
};

export default Playerstats;
