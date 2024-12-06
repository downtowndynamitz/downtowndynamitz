const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../src')));

app.post('/update-matches', (req, res) => {
    const { id, matchType, newMatch } = req.body;

    console.log('Received request payload:', req.body);

    // Validate the input data
    if (!id || !matchType || !newMatch) {
        console.log('Validation error: Missing required fields', req.body);
        return res.status(400).json({ error: 'Missing required fields' });
    }

    // Read the current JSON file
    fs.readFile('../src/data/players.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            return res.status(500).json({ error: 'Failed to read JSON file' });
        }

        let playersData;
        try {
            playersData = JSON.parse(data);
        } catch (err) {
            console.error('Error parsing JSON file:', err);
            return res.status(500).json({ error: 'Failed to parse JSON file' });
        }

        // Find the player by ID
        const playerIndex = playersData.findIndex(player => player.id === id);
        if (playerIndex === -1) {
            console.log('Player not found:', id);
            return res.status(404).json({ error: 'Player not found' });
        }

        // Find the match by matchId within the specified matchType
        const matchList = playersData[playerIndex][matchType];
        const matchIndex = matchList.findIndex(match => match.matchId === newMatch.matchId);
        
        if (matchIndex === -1) {
            // If match not found, add the new match
            matchList.push(newMatch);
        } else {
            // If match found, update the existing match
            matchList[matchIndex] = newMatch;
        }

        // Write the updated data back to the JSON file
        fs.writeFile('../src/data/players.json', JSON.stringify(playersData, null, 2), 'utf8', (err) => {
            if (err) {
                console.error('Error writing JSON file:', err);
                return res.status(500).json({ error: 'Failed to write JSON file' });
            }

            console.log('Match data updated successfully');
            res.json({ message: 'Match data updated successfully' });
        });
    });
});


app.post('/update-news', (req, res) => {
    const newData = req.body;
    
    // Read the existing file
    fs.readFile('../src/data/homenews.json', (err, data) => {
        if (err) {if (err.code === 'ENOENT') { data = '{"elements":[]}'; } else { return res.status(500).send('Error reading file'); }};
        try {
        let json = JSON.parse(data);
        
        if (!json.elements) { json.elements = []; }
        // Update the JSON data
        const jsonnewdata = { elements: [newData] };

        // Write back to the file
        fs.writeFile('../src/data/homenews.json', JSON.stringify(jsonnewdata, null, 2), (err) => {
            if (err) throw err;
            res.send('Data successfully updated');
        });
    } catch (parseErr) { return res.status(500).send('Error parsing JSON'); }
    });
});

app.get('*', (req, res) => { 
    res.sendFile(path.join(__dirname, '../src/index.js')); 
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
