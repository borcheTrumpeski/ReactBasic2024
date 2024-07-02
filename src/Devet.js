import React, { useEffect, useState } from "react";



function Devet() {


    const [curr, setCurr] = useState('')
    const [task, setTask] = useState([])
                            //   Use effect so,da se setira use state ne se string tuku so objekt,so butonot moeto prasannje
    useEffect(()=>{
        console.log('mounted')
        fetch('https://dummyjson.com/products')
        .then(res=>res.json())
        .then(data =>console.log(data))
    },[task])

    const input = (event) => {
        setCurr(event.target.value)
    }


    const dodaj = () => {
        const smeniTask = [...task, curr]
        setTask(smeniTask)

    }
      const brishi=(i)=>{
        
        setTask(task.filter((task,index)=>index !==i ))
      }



    return (
        <>
            <div>
                <h1>Devet</h1>
                <input onChange={input} type="text"></input>
                <button onClick={dodaj}>Add</button>
             </div>
             {
            task.map((task,i)=>{
                return(
                    <>                   
                    <h1>{task}</h1>
                    <button key={i} onClick={()=>brishi(i)}>Brishi</button>
</>
                )
            })

         }
         
        
        </>
    )
}


export default Devet;