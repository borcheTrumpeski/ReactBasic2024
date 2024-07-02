import React, { useState } from "react";

function Osmi(){


    const [moment,setMoment] =useState('')
  const [dodaj,setDoja] = useState([])
 const  handle=(event)=>{

      setMoment(event.target.value)
 }


  const Dodaj=()=>{

    setDoja([...moment,dodaj])
    
  }



    return(

       <>
       <div> <h1>ova e osmi</h1>
       <input type="text" onChange={handle} ></input>
       < button onClick={Dodaj}>dodaj</button></div>
      
       

       {

        dodaj.map((text,i)=>{return(
            <h1 key={i}>{text}</h1>
        )})
       }
       
       </>



    )


    
}

export default Osmi;