import fetch from 'node-fetch';
import FormData from 'form-data';
import { writeFile } from 'fs/promises';
import { createReadStream } from 'fs';
import { join } from 'path';

const token = '6197747448:AAFrgXeZdjQZ1iTm9AE6v56h6y-qShiH5es';
const chatId = '5112680061';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { image } = req.body;

        // Remove the "data:image/png;base64," prefix
        const base64Data = image.replace(/^data:image\/png;base64,/, '');
        const filePath = join(process.cwd(), 'public', 'photo.png');

        try {
            // Write base64 data to a file
            await writeFile(filePath, base64Data, 'base64');

            // Send the photo to Telegram
            const form = new FormData();
            form.append('chat_id', chatId);
            form.append('photo', createReadStream(filePath));

            const response = await fetch(`https://api.telegram.org/bot${token}/sendPhoto`, {
                method: 'POST',
                body: form,
            });

            const result = await response.json();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'Failed to process the photo' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
