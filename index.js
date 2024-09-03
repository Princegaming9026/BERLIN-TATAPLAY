const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

app.post('/sendLocation', async (req, res) => {
    const { chatId, latitude, longitude, botToken } = req.body;

    const url = `https://api.telegram.org/bot${botToken}/sendLocation`;

    try {
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
            console.error('Telegram API error:', data);
            res.status(500).json({ error: `Telegram API error: ${data.description || 'Unknown error'}` });
        }
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ error: 'Error sending location' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
