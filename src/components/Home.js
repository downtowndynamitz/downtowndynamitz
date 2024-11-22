import React from 'react';

const Home = () => {
    return (
        <div className="home">
            <div className="photo-gallery">
                <h3>Photo Gallery</h3>
                <img src="/assets/images/teamupdates/combined.jpg" alt="Downtown Dynamitz Logo" />
                <img src="/assets/images/teamupdates/mom.jpg" alt="Downtown Dynamitz Logo" />
            </div>
            <p><h3>Upcoming Matches</h3></p>
            <div className="upcoming-matches">
                
                
                <div className="match-card hupl">
                    <p><strong>HUPL Match Date:</strong> Nov 23, 2024 at 2:00 PM</p>
                    <p><strong>Opponent:</strong> Huskies</p>
                    <p><strong>Location:</strong> Badri Stadium</p>
                </div>
                
                <div className="match-card bth">
                    <p><strong>BTH Match Date:</strong> Dec 7, 2024 at 7:30 AM</p>
                    <p><strong>Opponent:</strong> Houston Scorpions</p>
                    <p><strong>Location:</strong> BTH Grounds</p>
                </div>
            </div>

            <div className="latest-news">
                <h3>Latest News</h3>
                <p>Downtown Dynamitz secures a thrilling victory against the Oldfarm Rangers!</p>
                <p>Star player <strong>Kiran Boddupalli</strong> achieves a personal best with 33 runs.</p>
            </div>

            <div className="weeklykey-players">
                <h3>Meet Our Key Players for this week</h3>
                <p><a href="/team/kiranp">Kiran Kumar Pariti - Captain</a></p>
                <p><a href="/team/kiranb">Kiran Boddupalli - Batsman</a></p>
                <p><a href="/team/ashok">Ashok Kolluru - Bowler</a></p>
            </div>
        </div>
    );
};

export default Home;
