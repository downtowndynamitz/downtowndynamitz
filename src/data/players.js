const players = [
    {
        id: 'ashok',
        name: 'Ashok Kolluru',
        role: 'Bowler',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm fast',
        photo: '/assets/images/teammembers/ashok.jpg',
        stats: {
            matches: 50,
            runs: 2000,
            wickets: 150,
        },
        
       

        huplmatches: [
            {
            matchId: 1,matchDate: "2024-11-02", opponent: "Striders",series: "HUPL",
            batting: { position: 9,runs: 5,ballsFaced: 3 },
            bowling: { overs: 3,runsConceded: 10,wickets: 0 },
            fielding: { catches: 0,runOuts: 0,stumpings: 0 }
            },
        ],
        bthmatches: [
            {
                matchId: 2,matchDate: "2024-11-09",opponent: "Oldfarm Rangers",series: "BTH",
                batting: { position: '-',runs: 0,ballsFaced: 0 },
                bowling: { overs: 4,runsConceded: 29,wickets: 1 },
                fielding: { catches: 0,runOuts: 0,stumpings: 0 }
            },
            {
                matchId: 3,matchDate: "2024-11-16",opponent: "Cypress Warriors",series: "BTH",
                batting: { position: 8,runs: 12,ballsFaced: 9 },
                bowling: { overs: 4,runsConceded: 25, wickets: 3 },
                fielding: { catches: 0,runOuts: 0, stumpings: 0 }
            },
        ]
    


    },
    {
        id: 'ashokv',
        name: 'Ashok Varma',
        role: 'Bowler',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm fast',
        photo: '/assets/images/teammembers/ashokvarma.jpeg',
        stats: {
            matches: 50,
            runs: 2000,
            wickets: 150,
        },
        huplmatches: [
            {
            matchId: 1,matchDate: "2024-11-02", opponent: "Striders",series: "HUPL",
            batting: { position: 9,runs: 5,ballsFaced: 3 },
            bowling: { overs: 2,runsConceded: 37,wickets: 1 },
            fielding: { catches: 0,runOuts: 0,stumpings: 0 }
            },
        ],
        bthmatches: [
            {
                matchId: 2,matchDate: "2024-11-09",opponent: "Oldfarm Rangers",series: "BTH",
                batting: { position: '-',runs: 0,ballsFaced: '-' },
                bowling: { overs: 4,runsConceded: 21,wickets: 2 },
                fielding: { catches: 0,runOuts: 0,stumpings: 0 }
            },
            {
                matchId: 3,matchDate: "2024-11-16",opponent: "Cypress Warriors",series: "BTH",
                batting: { position: 7,runs: 5,ballsFaced: 8 },
                bowling: { overs: 4,runsConceded: 25, wickets: 2 },
                fielding: { catches: 0,runOuts: 0, stumpings: 0 }
            },
        ]
    },
    {
        id: 'chandu',
        name: 'Bala Chandra',
        role: 'Batsman',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm medium',
        photo: '/assets/images/teammembers/chandu.jpeg',
        stats: {
            matches: 40,
            runs: 1800,
            wickets: 50,
        },
        huplmatches: [
            {
            matchId: 1,matchDate: "2024-11-02", opponent: "Striders",series: "HUPL",
            batting: { position: 4,runs: 14,ballsFaced: 8 },
            bowling: { overs: 1,runsConceded: 14,wickets: 0 },
            fielding: { catches: 0,runOuts: 0,stumpings: 0 }
            },
        ],
        bthmatches: [
            
            {
                matchId: 2,matchDate: "2024-11-09",opponent: "Oldfarm Rangers",series: "BTH",
                batting: { position: 2,runs: 32,ballsFaced: 21 },
                bowling: { overs: 0,runsConceded: 0,wickets: 0 },
                fielding: { catches: 1,runOuts: 0,stumpings: 0 }
            },
            
        ]
    },
    {
        id: 'giri',
        name: 'Giri Mullindram',
        role: 'Batsmen',
        battingStyle: 'Right-hand bat',
        photo: '/assets/images/teammembers/giri.jpeg',
        stats: {
            matches: 45,
            runs: 500,
            wickets: 170,
        },
        huplmatches: [
            
        ],
        bthmatches: [
            
            
        ]
    },
    {
        id: 'goutham',
        name: 'Goutham',
        role: 'Batsmen',
        battingStyle: 'Right-hand bat',
        photo: '/assets/images/teammembers/goutham.jpeg',
        stats: {
            matches: 45,
            runs: 500,
            wickets: 170,
        },
        huplmatches: [
            {
            matchId: 1,matchDate: "2024-11-02", opponent: "Striders",series: "HUPL",
            batting: { position: '8',runs: '0',ballsFaced: '2' },
            bowling: { overs: 0,runsConceded: 0,wickets: 0 },
            fielding: { catches: 0,runOuts: 0,stumpings: 0 }
            },
        ],
        bthmatches: [
           
            
        ]
    },
    {
        id: 'hari',
        name: 'Hari Krishna Pallem',
        role: 'Batsmen',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm medium',
        photo: '/assets/images/teammembers/hari.jpeg',
        stats: {
            matches: 45,
            runs: 500,
            wickets: 170,
        },
        huplmatches: [
            
        ],
        bthmatches: [
            
            
        ]
    },
    {
        id: 'harsha',
        name: 'Harsha Ramaneedi',
        role: 'Batsmen',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm leg spin',
        photo: '/assets/images/teammembers/harsha.jpeg',
        stats: {
            matches: 45,
            runs: 500,
            wickets: 170,
        },
        huplmatches: [
            {
             matchId: 1,matchDate: "2024-11-02", opponent: "Striders",series: "HUPL",
             batting: { position: '10',runs: 2,ballsFaced: 2 },
             bowling: { overs: '',runsConceded: '',wickets: '' },
             fielding: { catches: 1,runOuts: 0,stumpings: 0 }
             },
         ],
         bthmatches: [
             {
                 matchId: 2,matchDate: "2024-11-09",opponent: "Oldfarm Rangers",series: "BTH",
                 batting: { position: '-',runs: '',ballsFaced: '' },
                 bowling: { overs: 1,runsConceded: 4,wickets: 1 },
                 fielding: { catches: 1,runOuts: 1,stumpings: 0 }
             },
             {
                 matchId: 3,matchDate: "2024-11-16",opponent: "Cypress Warriors",series: "BTH",
                 batting: { position: 9,runs: 4,ballsFaced: 4 },
                 bowling: { overs: '',runsConceded: '', wickets: '' },
                 fielding: { catches: 0,runOuts: 0, stumpings: 0 }
             },
         ]
    },
    {
        id: 'kiranb',
        name: 'Kiran Boddupalli',
        role: 'Batsmen/Bowler',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm Fast',
        photo: '/assets/images/teammembers/kiranb.jpeg',
        stats: {
            matches: 45,
            runs: 500,
            wickets: 170,
        },
        huplmatches: [
            {
            matchId: 1,matchDate: "2024-11-02", opponent: "Striders",series: "HUPL",
            batting: { position: 1,runs: 10,ballsFaced: 7 },
            bowling: { overs: 3,runsConceded: 3,wickets: 3 },
            fielding: { catches: 0,runOuts: 0,stumpings: 0 }
            },
        ],
        bthmatches: [
            {
                matchId: 2,matchDate: "2024-11-09",opponent: "Oldfarm Rangers",series: "BTH",
                batting: { position: 1,runs: 33,ballsFaced: 17 },
                bowling: { overs: 4,runsConceded: 28,wickets: 1 },
                fielding: { catches: 1,runOuts: 0,stumpings: 0 }
            },
            {
                matchId: 3,matchDate: "2024-11-16",opponent: "Cypress Warriors",series: "BTH",
                batting: { position: 1,runs: 36,ballsFaced: 34 },
                bowling: { overs: 4,runsConceded: 15, wickets: 1 },
                fielding: { catches: 1,runOuts: 0, stumpings: 0 }
            },
        ]
    },
    {
        id: 'kiranp',
        name: 'Kiran Pariti',
        role: 'Batsmen/Wicket Keeper',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm offspin',
        photo: '/assets/images/teammembers/kiranp.jpeg',
        stats: {
            matches: 45,
            runs: 500,
            wickets: 170,
        },
        huplmatches: [
            {
             matchId: 1,matchDate: "2024-11-02", opponent: "Striders",series: "HUPL",
             batting: { position: 'Opener',runs: 14,ballsFaced: 15 },
             bowling: { overs: '-',runsConceded: '-',wickets: '-' },
             fielding: { catches: 3,runOuts: 2,stumpings: 1 }
             },
         ],
         bthmatches: [
             {
                 matchId: 2,matchDate: "2024-11-09",opponent: "Oldfarm Rangers",series: "BTH",
                 batting: { position: 'Opener',runs: 26,ballsFaced: 18 },
                 bowling: { overs: '-',runsConceded: '-',wickets: '-' },
                 fielding: { catches: 0,runOuts: 0,stumpings: 0 }
             },
             {
                 matchId: 3,matchDate: "2024-11-16",opponent: "Cypress Warriors",series: "BTH",
                 batting: { position: 'Opener',runs: 0,ballsFaced: 1 },
                 bowling: { overs: '-',runsConceded: '-', wickets: '-' },
                 fielding: { catches: 5,runOuts: 0, stumpings: 0 }
             },
         ]
    },
    {
        id: 'pavan',
        name: 'Pavan Emmineni',
        role: 'Batsmen',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm medium',
        photo: '/assets/images/teammembers/pavan.jpeg',
        stats: {
            matches: 45,
            runs: 500,
            wickets: 170,
        },
        huplmatches: [
            
         ],
         bthmatches: [
             
         ]
    },
    {
        id: 'raju',
        name: 'Raju',
        role: 'Batsmen/Bowler',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm medium',
        photo: '/assets/images/teammembers/raju.jpeg',
        stats: {
            matches: 45,
            runs: 500,
            wickets: 170,
        },
        huplmatches: [
            {
            matchId: 1,matchDate: "2024-11-02", opponent: "Striders",series: "HUPL",
            batting: { position: 2,runs: 10,ballsFaced: 14 },
            bowling: { overs: 3,runsConceded: 18,wickets: 1 },
            fielding: { catches: 0,runOuts: 0,stumpings: 0 }
            },
        ],
        bthmatches: [
            {
                matchId: 2,matchDate: "2024-11-09",opponent: "Oldfarm Rangers",series: "BTH",
                batting: { position: '-',runs: '-',ballsFaced: '-' },
                bowling: { overs: 4,runsConceded: 23,wickets: 1 },
                fielding: { catches: 1,runOuts: 0,stumpings: 0 }
            },
            {
                matchId: 3,matchDate: "2024-11-16",opponent: "Cypress Warriors",series: "BTH",
                batting: { position: 5,runs: 17,ballsFaced: 23 },
                bowling: { overs: 3,runsConceded: 26, wickets: 1 },
                fielding: { catches: 0,runOuts: 0, stumpings: 0 }
            },
        ]
    },
    {
        id: 'satya',
        name: 'Satya',
        role: 'Batsmen',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm medium',
        photo: '/assets/images/teammembers/satya.jpeg',
        stats: {
            matches: 45,
            runs: 500,
            wickets: 170,
        },
        huplmatches: [
           
        ],
        bthmatches: [
            {
                matchId: 2,matchDate: "2024-11-09",opponent: "Oldfarm Rangers",series: "BTH",
                batting: { position: '-',runs: '-',ballsFaced: '-' },
                bowling: { overs: '-',runsConceded: '-', wickets: '-' },
                fielding: { catches: 0,runOuts: 0,stumpings: 0 }
            },
            {
                matchId: 3,matchDate: "2024-11-16",opponent: "Cypress Warriors",series: "BTH",
                batting: { position: 4,runs: 10,ballsFaced: 19 },
                bowling: { overs: '-',runsConceded: '-', wickets: '-' },
                fielding: { catches: 1,runOuts: 0, stumpings: 0 }
            },
        ]
    },
    {
        id: 'sid',
        name: 'Sid Marathe',
        role: 'Batsmen',
        battingStyle: 'Right-hand bat',
        photo: '/assets/images/teammembers/sid.jpeg',
        stats: {
            matches: 45,
            runs: 500,
            wickets: 170,
        },
        huplmatches: [
           
        ],
        bthmatches: [
            {
                matchId: 2,matchDate: "2024-11-09",opponent: "Oldfarm Rangers",series: "BTH",
                batting: { position: 3,runs: 2,ballsFaced: 1 },
                bowling: { overs: '-',runsConceded: '-', wickets: '-' },
                fielding: { catches: 0,runOuts: 0, stumpings: 0 }
            },
            {
                matchId: 3,matchDate: "2024-11-16",opponent: "Cypress Warriors",series: "BTH",
                batting: { position: 3,runs: 0,ballsFaced: 1 },
                bowling: { overs: '-',runsConceded: '-', wickets: '-' },
                fielding: { catches: 0,runOuts: 0, stumpings: 0 }
            },
        ]
    },
    {
        id: 'sunil',
        name: 'Sunil',
        role: 'Bowler',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm fast',
        photo: '/assets/images/teammembers/sunil.jpeg',
        stats: {
            matches: 45,
            runs: 500,
            wickets: 170,
        },
        huplmatches: [
           
        ],
        bthmatches: [
            {
                matchId: 2,matchDate: "2024-11-09",opponent: "Oldfarm Rangers",series: "BTH",
                batting: { position: '-',runs: '-',ballsFaced: '-' },
                bowling: { overs: 3,runsConceded: 22,wickets: 0 },
                fielding: { catches: 1,runOuts: 0,stumpings: 0 }
            },
            {
                matchId: 3,matchDate: "2024-11-16",opponent: "Cypress Warriors",series: "BTH",
                batting: { position: 10,runs: 5,ballsFaced: 3 },
                bowling: { overs: 3.1,runsConceded: 21, wickets: 3 },
                fielding: { catches: 0,runOuts: 0, stumpings: 0 }
            },
        ]
    },
    {
        id: 'upen',
        name: 'Upendra Cheeti',
        role: 'Batsmen',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm medium',
        photo: '/assets/images/teammembers/upen.jpeg',
        stats: {
            matches: 45,
            runs: 500,
            wickets: 170,
        },
        huplmatches: [
            {
            matchId: 1,matchDate: "2024-11-02", opponent: "Striders",series: "HUPL",
            batting: { position: "Opener",runs: 2,ballsFaced: 5 },
            bowling: { overs: 3,runsConceded: 26,wickets: 1 },
            fielding: { catches: 1,runOuts: 0,stumpings: 0 }
            },
        ],
        bthmatches: [
            
            {
                matchId: 3,matchDate: "2024-11-16",opponent: "Cypress Warriors",series: "BTH",
                batting: { position: 2,runs: 7,ballsFaced: 12 },
                bowling: { overs: 0,runsConceded: 0, wickets: 0 },
                fielding: { catches: 0,runOuts: 0, stumpings: 0 }
            },
        ]
    },
    {
        id: 'venky',
        name: 'Venky Vishakha',
        role: 'Batsmen',
        battingStyle: 'Right-hand bat',
        photo: '/assets/images/teammembers/venky.jpeg',
        stats: {
            matches: 45,
            runs: 500,
            wickets: 170,
        },
        huplmatches: [
           
        ],
        bthmatches: [
            
        ]
    },
    {
        id: 'vinod',
        name: 'Vinod Chahar',
        role: 'Batsmen/Bowler',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm fast',
        photo: '/assets/images/teammembers/vinod.jpeg',
        stats: {
            matches: 45,
            runs: 500,
            wickets: 170,
        },
        huplmatches: [
           
        ],
        bthmatches: [
           
        ]
    },
    {
        id: 'saleem',
        name: 'Saleem Shaikh',
        role: 'Batsmen',
        battingStyle: 'Right-hand bat',
        photo: '',
        stats: {
            matches: 45,
            runs: 500,
            wickets: 170,
        },
        huplmatches: [
           
        ],
        bthmatches: [
           
        ]
    },
    {
        id: 'test',
        name: 'test user',
        role: 'Batsmen',
        battingStyle: 'Right-hand bat',
        photo: '',
        stats: {
            matches: 45,
            runs: 500,
            wickets: 170,
        },
        matches: [
            {
            matchId: 101,
            matchDate: "2024-11-10",
            opponent: "Houston Strikers",
            series: "HUPL",
            batting: {
                position: 1,
                runs: 75,
                ballsFaced: 50,
                fours: 8,
                sixes: 2
            },
            bowling: {
                overs: 0,
                maidens: 0,
                runsConceded: 0,
                wickets: 0
            },
            fielding: {
                catches: 1,
                runOuts: 0,
                stumpings: 0
            }
            },
            {
                matchId: 102,
                matchDate: "2024-11-10",
                opponent: "Houston Strikers",
                series: "BTH",
                batting: {
                    position: 2,
                    runs: 75,
                    ballsFaced: 50,
                    fours: 8,
                    sixes: 2
                },
                bowling: {
                    overs: 0,
                    maidens: 0,
                    runsConceded: 0,
                    wickets: 0
                },
                fielding: {
                    catches: 1,
                    runOuts: 0,
                    stumpings: 0
                }
            },
        ]
    },
    // Add more players as needed
];

export default players;
