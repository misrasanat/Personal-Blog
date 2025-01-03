const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5001; // Different Port than my Flask Backend

app.use(cors());
app.use(express.json())

app.get('/random-image', async(req, res) => {
    try{
        const api_key = process.env.PIXABAY_API_KEY;
        const response = await axios.get("https://pixabay.com/api/", {
            params: {
                key: api_key,
                image_type: 'photo', // Only fetch photos
                per_page: 3, // Get only one image
            }
        });
        console.log(response.data); // Log full API response for debugging
        const hits = response.data.hits;

        // Check if hits array is empty
        if (hits.length === 0) {
            return res.status(404).json({ message: 'testingNo images found.' });
        }
        const randomIndex = Math.floor(Math.random() * hits.length);

        const imageUrl = hits[randomIndex].webformatURL; // Fetch the image URL
        res.status(200).json({ imageUrl });


    } catch(error) {
        console.error('Error fetching image: ', error);
        res.status(500).json({ message: 'Failed to fetch random image.'});
    }
});

app.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`);
})