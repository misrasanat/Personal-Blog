import React, { useState } from 'react';

const RandomImage = () => {
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchImage = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://personalblogmisrasanat.onrender.com/random-image');
            const data = await response.json();
            if (data.imageUrl) {
                setImageUrl(data.imageUrl);
            } else {
                console.log("Hello")
                alert('No images found.');
            }
        } catch (error) {
            console.error('Error fetching image:', error);
            alert('Failed to fetch image.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="random-image-container">
            <h1>Random Image Generator</h1>
            <button onClick={fetchImage} disabled={loading}>
                {loading ? 'Loading...' : 'Generate Image'}
            </button>
            {imageUrl && <img src={imageUrl} alt="Random" style={{ marginTop: '20px', maxWidth: '100%' }} />}
        </div>
    );
};

export default RandomImage;