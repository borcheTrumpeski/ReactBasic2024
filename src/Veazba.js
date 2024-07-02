import React, { useState } from "react";


function Veazba() {

    const [text, setText] = useState('')
    const [element, setElement] = useState([])
    
    
    
    const handle = (event) => {
        setText(event.target.value)
   }
    
   const dodaj = () => {
        setElement([...element, text])
    };

    return (

        <>
            <div>
                <input type="text" onChange={handle}></input>
                <button onClick={dodaj}>Dodaj</button>
                {element.map((ite, i) => {
                    return (
                        <h1 key={i}>{ite}</h1>)
                })
                }
            </div>




        </>


    )





}




export default Veazba;