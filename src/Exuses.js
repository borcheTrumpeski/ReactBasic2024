import React, { useEffect, useState } from "react";

function Exuses() {
    const [excuse, setExcuse] = useState('');
    const [option, setOption] = useState('');

    useEffect(() => {
        if (excuse) {
            fetch(`https://excuser-three.vercel.app/v1/excuse/${excuse}`)
                .then(response => response.json())
                .then(data => setOption(data[0].excuse));
        }
    }, [excuse]);

    return (
        <div className="exuses-container">
            <h1>Free Excuses</h1>
            <button onClick={() => setExcuse('office')}>Office</button>
            <button onClick={() => setExcuse('family')}>Family</button>
            <button onClick={() => setExcuse('college')}>College</button>
            {option && <p className="excuse-text">{option}</p>}
        </div>
    );
}

export default Exuses;
