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
                <p>Downtown Dynamitz secures a thrilling victory against Huskies!</p>
                <p>Match Winning Knock by <strong>Ashok Varma</strong> achieves his personal best with 38 runs in just 22 balls.</p>
                <p>Outstanding Bowling Performance from <strong>Sunil Yernagula</strong> bowling 4 overs and taking 3 crucial wickets.</p>
                <p>Outstanding Bowling Performance from <strong>Harsha Ramaneedi</strong> bowling 3 overs conceeding 12 runs and breaking a crucial partneship.</p>
                <p>Nail bitting performance from <strong>Satya Vemuri</strong> bowling last over by restricting them with 1 run when 8 runs are required.</p>
            </div>

            <div className="weeklykey-players">
                <h3>Meet Our Key Players for this week</h3>
                <p><a href="/team/ashokv">Ashok Varma - Batsman</a></p>
                <p><a href="/team/sunil">Sunil Yernagula- Bowler</a></p>
                <p><a href="/team/harsha">Harsha Ramaneedi - Bowler</a></p>
                <p><a href="/team/satya">Satya Vemuri - Bowler</a></p>
            </div>
        </div>
    );
};

export default Home;
