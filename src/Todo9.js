import React, { useEffect, useState } from "react";


function Todo9() {


    const [curr, setCurr] = useState('')
    const [task, setTask] = useState([])
    
           useEffect(()=>{
            console.log('vnatre')
           },[])

           console.log('nadvor')


    const handler = (event) => {

        setCurr(event.target.value)
        console.log(task, 'denest event')
    }
    const addTask = () => {
       if(curr===''){
alert("vnesete text")
       }
       else(
        setTask([curr, ...task])

       )
        
    }

        const brishi=(index)=>{
            setTask(task.filter((task,i)=>i !==index))
            console.log('ova e kirca',typeof(kirca))
        }
    return (
        <>
            <div>
                <h1>todo9</h1>
                <input onChange={handler} type="text"></input>
                <button onClick={addTask}>add to list</button>
                {
                    task.map((task, index) => {
                        return (
                            <>
                                <h1 key={index}>{task}</h1>
                                <button key={index} onClick={()=>brishi(index)} >Brishi</button>


                            </>
                        )

                    })
                }

            </div>
        </>
    )

}



export default Todo9;