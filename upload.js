const express = require('express');
const fetch = require('node-fetch');
const app = express();
app.use(express.json());

app.post('/sendLocation', async (req, res) => {
    const { chatId, latitude, longitude, botToken } = req.body;

    // Construct the URL for sending the location message
    const url = `https://api.telegram.org/bot${botToken}/sendLocation`;

    try {
        // Send the location to the specified chat ID
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                latitude: latitude,
                longitude: longitude
            })
        });

        const data = await response.json();
        if (data.ok) {
            res.json({ status: 'Location sent successfully!' });
        } else {
            res.status(500).json({ error: 'Failed to send location' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error sending location' });
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
