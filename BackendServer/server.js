const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000; // Let Vercel manage the port

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../build')));

app.post('/update-matches', (req, res) => {
    const { id, matchType, newMatch } = req.body;

    if (!id || !matchType || !newMatch) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    fs.readFile(path.join(__dirname, '../src/data/players.json'), 'utf8', (err, data) => {
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

        fs.writeFile(path.join(__dirname, '../src/data/players.json'), JSON.stringify(playersData, null, 2), 'utf8', (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to write JSON file' });
            }

            res.json({ message: 'Match data updated successfully' });
        });
    });
});

app.post('/update-news', (req, res) => {
    const newData = req.body;

    fs.readFile(path.join(__dirname, '../src/data/homenews.json'), (err, data) => {
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

            fs.writeFile(path.join(__dirname, '../src/data/homenews.json'), JSON.stringify(jsonnewdata, null, 2), (err) => {
                if (err) throw err;
                res.send('Data successfully updated');
            });
        } catch (parseErr) {
            return res.status(500).send('Error parsing JSON');
        }
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});