import React, { useState } from 'react';

const AgifyComponent = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(null);

    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    const handleButtonClick = () => {
        fetch(`https://api.agify.io/?name=${name}`)
            .then((response) => response.json())
            .then((data) => {
                setAge(data.age);
            })
            .catch((error) => {

            });
    };

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={handleInputChange}
                placeholder="Enter a name"
            />
            <button onClick={handleButtonClick}>Predict Age</button>
            {age !== null && <p>Predicted age for {name} is {age}.</p>}
        </div>
    );
};

export default AgifyComponent;

// import React, { useState } from 'react';
// import axios from 'axios';

// const AgifyComponent = () => {
//     const [name, setName] = useState('');
//     const [age, setAge] = useState(null);

//     const handleInputChange = (event) => {
//         setName(event.target.value);
//     };

//     const handleButtonClick = () => {
//         axios
//             .get(`https://api.agify.io/?name=${name}`)
//             .then((response) => {
//                 setAge(response.data.age);
//             })
//             .catch((error) => {
//             });
//     };

//     return (
//         <div>
//             <input
//                 type="text"
//                 value={name}
//                 onChange={handleInputChange}
//                 placeholder="Enter a name"
//             />
//             <button onClick={handleButtonClick}>Predict Age</button>
//             {age !== null && <p>Predicted age for {name} is {age}.</p>}
//         </div>
//     );
// };

// export default AgifyComponent;

