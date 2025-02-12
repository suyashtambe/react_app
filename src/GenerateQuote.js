import React, { useState } from 'react';
import axios from 'axios';
import './GenerateQuote.css';

const GenerateQuote = () => {
    const [tags, setTags] = useState('');
    const [quote, setQuote] = useState('');

    const handleGenerate = async () => {
        try {
            const response = await axios.post('http://localhost:5000/generate', { tags });
            setQuote(response.data.quote);
        } catch (error) {
            console.error('Error generating quote:', error);
        }
    };

    return (
        <div className="generate-quote-container">
            <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="Enter tags (e.g., happiness, love)"
            />
            <button onClick={handleGenerate}>Generate Quote</button>
            {quote && (
                <div className="generated-quote-box">
                    <h2>Generated Quote:</h2>
                    <p>{quote}</p>
                </div>
            )}
        </div>
    );
};

export default GenerateQuote;
