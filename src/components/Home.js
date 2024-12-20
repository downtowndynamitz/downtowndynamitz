import {React,useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import latestnews from '../data/homenews.json'
import getKey from '../data/players.json'
const Home = () => {
    const [nextHUPLMatch,setnextHUPLMatch] = useState(null);
    const [nextBTHMatch,setnextBTHMatch] = useState(null);

    const tournament1 = {
        title: 'HUPL Tournament',
        matches: [
            { date: '11/2/2024', Time: '2.30 AM', opponent: 'Striders', location: 'Badri Stadium' },
            { date: '11/23/2024', Time: '2.00 PM', opponent: 'Huskies', location: 'Badri Stadium' },
            { date: '12/21/2024', Time: '7.30 AM', opponent: 'Stafford', location: 'Cullen Ground' },
            { date: '1/11/2025', Time: '7.30 AM', opponent: 'HTCC', location: 'Badri Stadium' },
            { date: '2/1/2025', Time: '10.45 AM', opponent: 'Exiles', location: 'Cullen Ground' },
            { date: '2/8/2025', Time: '10.45 AM', opponent: 'Old farm Rangers', location: 'Badri Stadium' },
            { date: '3/8/2025', Time: '7.30 AM', opponent: 'Nirvana', location: 'Cullen Ground' },
            // Add more matches as needed
        ]
    };

    const tournament2 = {
        title: 'BTH Tournament',
        matches: [
            { date: '11/09/2024', Time: '',opponent: 'Old Farm Rangers', location: 'BTH Ground' },
            { date: '11/16/2024', Time: '', opponent: 'Cypress Warriors', location: 'BTH Ground' },
            { date: '12/7/2024', Time: '7.30 AM', opponent: 'Houston Scorpions', location: 'BTH Ground' },
            { date: '12/14/2024', Time: '11.30 AM', opponent: 'Wolfpack Icons', location: 'BTH Ground' },
            { date: '12/22/2024', Time: '11.30 AM', opponent: 'BTAMU', location: 'BTH Ground' },
            { date: '1/4/2025', Time: '11.30 AM', opponent: 'Desert Eagles', location: 'BTH Ground' },
            { date: 'TBD', opponent: 'TBD', location: 'BTH Ground' },
            // Add more matches as needed
        ]
    };
    useEffect(() => {
        const getUpcomingmatches = () =>{
            const currentDate = new Date();
            const nextmatch1 = tournament1.matches.find(match => currentDate.toLocaleDateString() < match.date)
            //console.log(nextmatch1)
            if(nextmatch1){
                setnextHUPLMatch(nextmatch1)
            }

            const nextmatch2 = tournament2.matches.find(match => currentDate.toLocaleDateString() < match.date);
            if(nextmatch2){
                setnextBTHMatch(nextmatch2)
            }
        }
        getUpcomingmatches();  
    });
    
    const navigate = useNavigate(); 
    const handleAddAdminClick = () => { 
        const password = prompt('Please enter the admin password:'); 
        const correctPassword = getKey[0].projectsecret; 
        if (password === correctPassword) { 
            navigate('/latestnews'); 
        } else { 
            alert('Access denied'); 
        }
    } 
    
    return (
        <div className="home">
            
            <div className="photo-gallery">
                <h3>Photo Gallery</h3>
                <img src="/assets/images/teamupdates/combined.jpg" alt="Downtown Dynamitz Logo" />
                <img src="/assets/images/teamupdates/mom.jpg" alt="Downtown Dynamitz MOM" />
            </div>
            
            <p><h3>Upcoming Matches</h3></p>
            <div className="upcoming-matches">
                
                
                <div className="match-card hupl">
                {nextHUPLMatch ? (
                    <>
                        <p><strong>HUPL Match Date : </strong></p>
                        <p>{nextHUPLMatch.date} at {nextHUPLMatch.Time}</p>
                        <p><strong>Opponent:</strong> {nextHUPLMatch.opponent}</p>
                        <p><strong>Location:</strong> {nextHUPLMatch.location}</p>
                    </>
                    
                ) : (
                    <p><strong>No Future matches</strong></p>
                )}
                    
                </div>
                
                <div className="match-card bth">
                    {nextBTHMatch ? (
                        <>
                            <p><strong>BTH Match Date:</strong></p>
                            <p>{nextBTHMatch.date} at {nextBTHMatch.Time}</p>
                            <p><strong>Opponent:</strong> {nextBTHMatch.opponent}</p>
                            <p><strong>Location:</strong> {nextBTHMatch.location}</p>
                        </>
                    ) : (

                        <p><strong>No Future matches</strong></p>
                    )}
                </div>
            </div>
            
            <div className="latest-news">
                <h3>Latest News (<a href="#" onClick={handleAddAdminClick}>+</a>)</h3>
                <p id='lastestp1'>{latestnews.elements[0].latesttemplate[0]} {latestnews.elements[0].keyPlayers[0]}</p>
                <p id='lastestp2'>{latestnews.elements[0].latesttemplate[1]} {latestnews.elements[0].keyPlayers[1]} {latestnews.elements[0].latestNews[1]}</p>
                <p id='lastestp3'>{latestnews.elements[0].latesttemplate[2]} {latestnews.elements[0].keyPlayers[2]} {latestnews.elements[0].latestNews[2]}</p>
                <p id='lastestp4'>{latestnews.elements[0].latesttemplate[3]} {latestnews.elements[0].keyPlayers[3]} {latestnews.elements[0].latestNews[3]}</p>
                <p id='lastestp5'>{latestnews.elements[0].latesttemplate[4]} {latestnews.elements[0].keyPlayers[4]} {latestnews.elements[0].latestNews[4]}</p>
            </div>

            <div className="weeklykey-players">
                <h3>Meet Our Key Players for this week</h3>
                <p id='keyplayersp1'>{latestnews.elements[0].keyPlayers[1]}</p>
                <p id='keyplayersp2'>{latestnews.elements[0].keyPlayers[2]}</p>
                <p id='keyplayersp3'>{latestnews.elements[0].keyPlayers[3]}</p>
                <p id='keyplayersp4'>{latestnews.elements[0].keyPlayers[4]}</p>
            </div>
            <div className='sponsors'>
            <h3>Our Sponsors</h3>
                <p><img src="https://s4stech.com/wp-content/uploads/2021/12/S4S_LOGO.png" alt="S4S Tech" /></p>
            </div>
        </div>
    );
};

export default Home;
