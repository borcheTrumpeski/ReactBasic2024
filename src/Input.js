import React,{useState} from "react";

function Input(){

const [poraka,setPoraka]= useState('') //use state vraka niza od dve sostojbi (tekovna sostojba i funkcija koja sluzi za abdejtiranje na tekovnata)

// const handle e funkcija koja na eventot ja setira porakata od vrednosta na inputot
 const  handleText=(event)=>{
   setPoraka(event.target.value)

}

return(
    <>
<div>
  <h1>{poraka}</h1>
    <input type="text" onChange={handleText} /> 
</div>

    </>
)

}
export default Input;