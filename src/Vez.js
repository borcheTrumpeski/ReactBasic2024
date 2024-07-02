import React, { useState } from "react";

function Vez() {

    const [vrednost, setVrednost] = useState('')
    const [task, setTask] = useState([])
    
    const handle = (event) => {
        setVrednost(event.target.value)


    }

    const addTask = () => {

        const polni = [...task,vrednost]
        setTask(polni)

    }

    console.log(task)

    const brishi=()=>{


    }

    return (
        <>
            <div>
                <h1>7 pat</h1>
                <input onChange={handle} type="text"></input>
                <button className="bar" onClick={addTask} >Dodaj</button>

                {
                    task.map((task, i) => {
                        return (
                            <>
                                <h1 key={i}>{task}</h1>
                                <button key={i} on onClick={brishi}></button>
                            </>
                        )
                    })
                }

            </div>


        </>
    )
}
export default Vez;