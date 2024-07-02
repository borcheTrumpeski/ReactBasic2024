import React, { useState, useEffect } from 'react';

function SeasonRadioButtons() {
    const [season, setSeason] = useState('');

    const handleSeasonChange = (event) => {
        setSeason(event.target.value);
    };

    useEffect(() => {
        if (season) {
            console.log(`The current season is ${season}`);
        }
    }, [season]);

    return (
        <div>
            <h1>Select a season</h1>
            <div>
                <label>
                    <input
                        type="radio"
                        value="Summer"
                        checked={season === 'Summer'}
                        onChange={(event) => setSeason(event.target.value)}
                    />
                    Summer
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="radio"
                        value="Winter"
                        checked={season === 'Winter'}
                        onChange={(event) => setSeason(event.target.value)}
                    />
                    Winter
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="radio"
                        value="Spring"
                        checked={season === 'Spring'}
                        onChange={(event) => setSeason(event.target.value)}
                    />
                    Spring
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="radio"
                        value="Autumn"
                        checked={season === 'Autumn'}
                        onChange={(event) => setSeason(event.target.value)}
                    />
                    Autumn
                </label>
            </div>
            <div>
                {season === 'Summer' && <p>ITS HOT</p>}
                {season === 'Winter' && <p>ITS COLD</p>}
                {season === 'Spring' && <p>ITS SEXY</p>}
                {season === 'Autumn' && <p>ITS WINDY</p>}
            </div>
        </div>
    );
}

export default SeasonRadioButtons;
