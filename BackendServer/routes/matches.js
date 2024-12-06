const express = require('express');
const fs = require('fs');
const router = express.Router();

router.post('/', (req, res) => {
  const { id, matchType, newMatch } = req.body;

  if (!id || !matchType || !newMatch) {
    console.log('Validation error: Missing required fields', req.body);
    return res.status(400).json({ error: 'Missing required fields' });
  }

  fs.readFile('players.js', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading JS file:', err);
      return res.status(500).json({ error: 'Failed to read JS file' });
    }

    let playersData;
    try {
      playersData = eval(data);
    } catch (err) {
      console.error('Error parsing JS file:', err);
      return res.status(500).json({ error: 'Failed to parse JS file' });
    }
    
    const playerIndex = playersData.findIndex(player => player.id === id);
    if (playerIndex === -1) {
      console.log('Player not found:', id);
      return res.status(404).json({ error: 'Player not found' });
    }

    playersData[playerIndex][matchType].push(newMatch);

    const updatedData = `const players = ${JSON.stringify(playersData, null, 2)};\n\nexport default players;`;

    fs.writeFile('players.js', updatedData, 'utf8', (err) => {
      if (err) {
        console.error('Error writing JS file:', err);
        return res.status(500).json({ error: 'Failed to write JS file' });
      }

      res.json({ message: 'Match data updated successfully' });
    });
  });
});

module.exports = router;
