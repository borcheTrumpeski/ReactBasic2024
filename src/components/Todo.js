import React, { useState, useEffect } from 'react';

function Todo() {
    const [name, setName] = useState("");
    const [addNames, setAddNames] = useState([]);

    const handleInput = (event) => {
        setName(event.target.value);
    };

    const addElements = () => {
        const newItem = {
            id: Date.now(),
            name: name
        };
        const updatedNames = [...addNames, newItem];
        setAddNames(updatedNames);
        setName("");
    };

    const deleteItem = (id) => {
        const updatedNames = addNames.filter(item => item.id !== id);
        setAddNames(updatedNames);
    };

    useEffect(() => {
        console.log('Updated names:', addNames);
    }, [addNames]);


    return (
        <div>
            <input
                type='text'
                value={name}
                onChange={handleInput}
            />
            <button onClick={addElements}>Add name</button>
            <p>Names:</p>
            <ul>
                {addNames.map((item) => (
                    <li key={item.id}>
                        {item.name} <button onClick={() => deleteItem(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;


// cosnta hahah = () =>   math preku konstanta
//     retrun Math.floor(Math.random() * 9999) + 1;



// const addElements = () => { id so math
//     const newItem = {
//         Math.floor(Math.random() * 9999) + 1;
//         name: name
//     };


// const addElements = () => { id so array dolzina
//     const newItem = {
//         id: addNames.length, // Use the array length as the unique id
//         name: name
//     };

// import React, { useState } from 'react'; basic todo

// function Todo() {
//     const [name, setName] = useState("");
//     const [addNames, setAddNames] = useState([]);

//     const handleInput = (event) => {
//         setName(event.target.value);
//     };

//     const addElements = () => {
//         const updatedNames = [...addNames, name];
//         setAddNames(updatedNames);
//         setName("");
//     };

//     const deleteItem = (index) => {
//         const updatedNames = addNames.filter((item, i) => i !== index);
//         setAddNames(updatedNames);
//     };

//     return (
//         <div>
//             <input
//                 type='text'
//                 value={name}
//                 onChange={handleInput}
//             />
//             <button onClick={addElements}>Add name</button>
//             <p>Names:</p>
//             <ul>
//                 {addNames.map((item, index) => (
//                     <li key={index}>
//                         {item} <button onClick={() => deleteItem(index)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default Todo;
