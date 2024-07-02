import React, { useState } from "react";
import Props from "./props";


function Exi(){


const [curr,setCur]=useState('')
const [task,setTask] =useState([])


   const setText=(event)=>{
        setCur(event.target.value)

   }

const dodaj=()=>{
     const d=[...task,curr]  
  setTask( d )
}
console.log(task)


const brishi=(keyin)=>{
 setTask(task.filter((task,index)=> index!==keyin)) 
}


  return(
    <div><h1> Add in To to</h1>
  
     <input type="text" on onChange={setText}></input>
     <button on onClick={dodaj}>Dodaj Task</button>
     {
      task.map((task,i)=>{ return(
      <><h1 key={i}>{task}</h1>
    <button key={i} onClick={() => brishi(i)} >brisi</button>

    </>  
      )
      })
     }
   </div>
  )


  }

export default Exi;