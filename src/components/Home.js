import React from 'react';

const Home = () => {
    return (
        <div className="home">
            <div class="photo-gallery">
                <h3>Photo Gallery</h3>
                <img src="/assets/images/teamupdates/combined.jpg" alt="Downtown Dynamitz Logo" className="" />
                <img src="/assets/images/teamupdates/mom.jpg" alt="Downtown Dynamitz Logo" className="" />
            </div>

            <div class="upcoming-matches">
                <h3>Upcoming Matches</h3>
                
                <p><strong>HUPL Match Date:</strong> Nov 23, 2024 at 2:00 PM - <strong>Opponent:</strong> Huskies - <strong>Location:</strong> Badri Stadium</p>
                
                <p><strong>BTH Match Date:</strong> Dec 7th, 2024 at 7.30 AM - <strong>Opponent:</strong> Houston Scorpions - <strong>Location:</strong> BTH Grounds</p>
                
                    
            </div>
            <div class="latest-news">
                <h3>Latest News</h3>
                <p>Downtown Dynamitz secures a thrilling victory against the Oldfarm Rangers!</p>
                <p>Star player <strong>Kiran Boddupalli</strong> achieves a personal best with 33 runs.</p>
            </div>

            <div class="weeklykey-players">
                <h3>Meet Our Key Players for this week</h3>
                    <p><a href="/team/kiranp">Kiran Kumar Pariti - Captain</a></p>
                    <p><a href="/team/kiranb">Kiran Boddupalli - Batsman</a></p>
                    <p><a href="/team/ashok">Ashok Kolluru - Bowler</a></p>
            </div>
        </div>
    );
};

export default Home;
