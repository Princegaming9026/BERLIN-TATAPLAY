const express = require('express');
const fetch = require('node-fetch');
const app = express();
app.use(express.json());

app.post('/sendLocation', async (req, res) => {
    const { chatId, latitude, longitude, botToken } = req.body;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const message = `User location:\nLatitude: ${latitude}\nLongitude: ${longitude}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text: message
            })
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to send location' });
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
