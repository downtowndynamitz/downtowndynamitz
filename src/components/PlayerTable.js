import React from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

const PlayerTable = ({ players }) => {
    const columns = [
        {
            name: 'Photo',
            selector: row => row.photo,
            cell: row => <img src={row.photo} alt={row.name} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
            cell: row => <Link to={`/team/${row.name}`}>{row.name}</Link>
        },
        {
            name: 'Role',
            selector: row => row.role,
            sortable: true,
        },
        /*{
            name: 'Batting Style',
            selector: row => row.battingStyle,
            sortable: true,
        },
        {
            name: 'Bowling Style',
            selector: row => row.bowlingStyle,
            sortable: true,
        },
        {
            name: 'Matches',
            selector: row => row.stats.matches,
            sortable: true,
        },
        {
            name: 'Runs',
            selector: row => row.stats.runs,
            sortable: true,
        },
        {
            name: 'Wickets',
            selector: row => row.stats.wickets,
            sortable: true,
        }*/
    ];

    return (
        <DataTable 
            title="Downtown Dynamitz Cricket Team"
            columns={columns}
            data={players}
            pagination
        />
    );
};

export default PlayerTable;
