import { useState, useEffect } from 'react';

export const fetchPlayers = async () => {
    try {
        const response = await fetch('https://api.cricclubs.com/HoustonUnitedPremierLeague/viewTeam.do?teamId=189&clubId=13647'); // Replace 12345 with the actual team ID
        const data = await response.json();
        return data.players;
    } catch (error) {
        console.error("Error fetching players:", error);
        return [];
    }
};
