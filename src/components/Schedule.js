import React from 'react';
import TournamentSchedule from './TournamentSchedule';

const Schedule = () => {  
        const tournament1 = {
            title: 'HUPL Tournament',
            matches: [
                { date: '2024-11-02, 2.30 AM', opponent: 'Striders', location: 'Badri Stadium' },
                { date: '2024-11-23, 2.00 PM', opponent: 'Huskies', location: 'Badri Stadium' },
                { date: '2024-12-21, 7.30 AM', opponent: 'Stafford', location: 'Cullen Cricket Ground' },
                { date: '2025-01-11, 7.30 AM', opponent: 'HTCC', location: 'Badri Stadium' },
                { date: '2025-02-01, 10.45 AM', opponent: 'Exiles', location: 'Cullen Cricket Ground' },
                { date: '2025-02-08, 10.45 AM', opponent: 'Hashtag Indians', location: 'Badri Stadium' },
                { date: '2025-02-15, 10.45 AM', opponent: 'Nirvana', location: 'Cullen Cricket Ground' },
                // Add more matches as needed
            ]
        };
    
        const tournament2 = {
            title: 'BTH Tournament',
            matches: [
                { date: '2024-11-09', opponent: 'Old Farm Rangers', location: 'BTH Ground' },
                { date: '2024-11-16', opponent: 'Cypress Warriors', location: 'BTH Ground' },
                { date: '2024-12-07, 7.30 AM', opponent: 'Houston Scorpions', location: 'BTH Ground' },
                { date: '2024-12-14, 11.30 AM', opponent: 'Wolfpack Icons', location: 'BTH Ground' },
                { date: '2024-12-22, 11.30 AM', opponent: 'BTAMU', location: 'BTH Ground' },
                { date: '2025-01-04, 11.30 AM', opponent: 'Stallions', location: 'BTH Ground' },
                { date: 'TBD', opponent: 'TBD', location: 'BTH Ground' },
                // Add more matches as needed
            ]
        };
        return (
        <div className="schedule">
            <h2>Full Scheduled Matches</h2>
            <div className="schedule-grid"> 
                <TournamentSchedule title={tournament1.title} matches={tournament1.matches} /> 
                <TournamentSchedule title={tournament2.title} matches={tournament2.matches} /> </div>
        </div>
    );
};

export default Schedule;
