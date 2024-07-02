import React,{useState} from "react";

function InDe(){

    const [momentalna,apdejt] = useState(0)
    


    const increment=()=>{
        apdejt((momentalna) => momentalna+1)
    }
    const  Decrement=()=>{
        apdejt((momentalna) => momentalna-1)

        
    }
    return(
        <>

        <div className="brojach">
            <button className="4" onClick={increment}>+</button>
            <h1>{momentalna}</h1>
            <button className="4" onClick={Decrement}>-</button>

        </div>
        </>
    )

}
 export default InDe;