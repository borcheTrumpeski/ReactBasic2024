import React, { useState } from 'react';

const ExcuseComponent = () => {
    const [excuse, setExcuse] = useState('');

    const fetchExcuse = async (endpoint) => {
        try {
            const response = await fetch(`https://excuser-three.vercel.app/v1/excuse/${endpoint}`);

            const data = await response.json();
            console.log(data)
            if (Array.isArray(data) && data.length > 0) {
                setExcuse(data[0].excuse);
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };

    return (
        <div>
            <button onClick={() => fetchExcuse('office')}>Office</button>
            <button onClick={() => fetchExcuse('family')}>Family</button>
            <button onClick={() => fetchExcuse('college')}>College</button>

            {excuse && <p>Excuse: {excuse}</p>}
        </div>
    );
};

export default ExcuseComponent;

// import React, { useState, useEffect } from 'react'; so useEffect

// const ExcuseComponent = () => {
//     const [excuse, setExcuse] = useState('');
//     const [data, setData] = useState([]);

//     const fetchExcuse = async (endpoint) => {
//         try {
//             const response = await fetch(`https://excuser-three.vercel.app/v1/excuse/${endpoint}`);
//             const result = await response.json();
//             setData(result);
//         } catch (error) {
//             console.log('Error fetching excuse:', error);
//         }
//     };

//     useEffect(() => {
//         if (Array.isArray(data) && data.length > 0) {
//             setExcuse(data[0].excuse);
//         }
//     }, [data]);

//     return (
//         <div>
//             <button onClick={() => fetchExcuse('office')}>Office</button>
//             <button onClick={() => fetchExcuse('family')}>Family</button>
//             <button onClick={() => fetchExcuse('college')}>College</button>

//             {excuse && <p>Excuse: {excuse}</p>}
//         </div>
//     );
// };

// export default ExcuseComponent;
