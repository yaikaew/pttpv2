require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// ---- Google Sheet Config ----
const SHEET_ID = process.env.SHEET_ID;
const API_KEY = process.env.API_KEY;

// range map = ชื่อ tab → range ของแต่ละ sheet
const sheetRanges = {
    series: 'series!A2:L',
    discography: 'discography!A2:G',
    performance: 'performance!A2:J',
    cover: 'cover!A2:J',
    magazine: 'magazine!A2:F',
    shows: 'shows!A2:K',
    presenter: 'presenter!A2:F',
    awards: 'awards!A2:K',
    schedule: 'Sheet1!A2:P',
    outfit: 'Sheet1!A2:O',
};

// ---- Helper: fetch a single sheet ----
async function fetchSheet(range) {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${encodeURIComponent(range)}?key=${API_KEY}`;
    const res = await fetch(url);
    if (!res.ok) return [];
    const json = await res.json();
    return json.values || [];
}

// ---- MAIN API: fetch all sheets once ----
app.get('/api/all-data', async (req, res) => {
    try {
        const entries = await Promise.all(
            Object.entries(sheetRanges).map(async ([key, range]) => {
                const data = await fetchSheet(range);
                return [key, data];
            })
        );

        // convert array of entries → object
        const result = Object.fromEntries(entries);

        res.json(result);

    } catch (err) {
        console.error("ERROR /api/all-data:", err);
        res.status(500).json({ error: 'Failed to load all Google Sheets data' });
    }
});

// ---- Server start ----
app.listen(PORT, () => {
    console.log(`Server running → http://localhost:${PORT}`);
});
