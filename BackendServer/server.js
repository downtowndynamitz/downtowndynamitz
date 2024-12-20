const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../build')));

// Endpoint to update matches
app.post('/api/update-matches', (req, res) => {  // Updated endpoint path
    const { id, matchType, newMatch } = req.body;

    if (!id || !matchType || !newMatch) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const filePath = path.join(__dirname, 'data', 'players.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read JSON file' });
        }

        let playersData;
        try {
            playersData = JSON.parse(data);
        } catch (err) {
            return res.status(500).json({ error: 'Failed to parse JSON file' });
        }

        const playerIndex = playersData.findIndex(player => player.id === id);
        if (playerIndex === -1) {
            return res.status(404).json({ error: 'Player not found' });
        }

        const matchList = playersData[playerIndex][matchType];
        const matchIndex = matchList.findIndex(match => match.matchId === newMatch.matchId);

        if (matchIndex === -1) {
            matchList.push(newMatch);
        } else {
            matchList[matchIndex] = newMatch;
        }

        fs.writeFile(filePath, JSON.stringify(playersData, null, 2), 'utf8', (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to write JSON file' });
            }

            res.json({ message: 'Match data updated successfully' });
        });
    });
});

// Endpoint to update news
app.post('/api/update-news', (req, res) => {  // Updated endpoint path
    const newData = req.body;

    const filePath = path.join(__dirname, 'data', 'homenews.json');

    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                data = '{"elements":[]}';
            } else {
                return res.status(500).send('Error reading file');
            }
        }
        try {
            let json = JSON.parse(data);

            if (!json.elements) {
                json.elements = [];
            }

            const jsonnewdata = { elements: [newData] };

            fs.writeFile(filePath, JSON.stringify(jsonnewdata, null, 2), (err) => {
                if (err) throw err;
                res.send('Data successfully updated');
            });
        } catch (parseErr) {
            return res.status(500).send('Error parsing JSON');
        }
    });
});

// Serve the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
