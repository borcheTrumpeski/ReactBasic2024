import React, { useState } from 'react';

const CatFactComponent = () => {
    const [fact, setFact] = useState('');

    const handleButtonClick = () => {
        fetch('https://catfact.ninja/fact')
            .then(response => response.json())
            .then(data => {
                setFact(data.fact);
            })
            .catch(error => {

            });
    };

    return (
        <div>
            <button onClick={handleButtonClick}>Get Cat Fact</button>
            {fact && <p>{fact}</p>}
        </div>
    );
};

export default CatFactComponent;