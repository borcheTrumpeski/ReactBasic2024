import React, { useEffect, useState } from "react";
import Effect from "./Effect";


function Find() {

    const [input, setInput] = useState('')
    const [users, setUsers] = useState([])
    const [state, setState] = useState(false)
    const handleButton = () => {
        setState(!state)
    }


    console.log(Array.isArray(users))



    const handleInput = (event) => {
        setInput(event.target.value)
    }

    useEffect(() => {
        input && fetch(`https://dummyjson.com/users/search?q=${input}`)
            .then(re => re.json())
            .then(data => setUsers(data.users))
        // setState(false)

    }, [input])

    return (
            <div className="find-container" >
            <h1>Search Users</h1>
            <input onChange={handleInput} type="text"></input>
           <button className="container" Hover disabled={!input} onClick={handleButton}>Search</button>

            {
                state && input && users.map((user, key) => {
                    return (<div className="user-container">
                        <h1 className="users" key={key}> Име: <span className="user" > {user.firstName} </span>Презиме:<span className="user"> {user.lastName} </span></h1>
                        <h4>E - Mail:<span className="user"> {user.email} </span> </h4>
                    </div>)
                })
            }
       </div> 
    )

}

export default Find;
