import React, { useEffect, useState } from "react";

function Search() {

    const [user, setUser] = useState('')
    const [search, setSearch] = useState([])
 
     console.log(search)
     
    const inputHandle = (event) => {
        setUser(event.target.value)

    }
    useEffect(() => {
        if (user !== '') {
            fetch(`https://dummyjson.com/users/search?q=${user}`)
            .then(respo => respo.json())
            .then(data =>setSearch(data.users.map(user=>{return(user.lastName)})))
        }
    },[user]
    )
   

   const [searchPerformed,setSearcPerformed]=useState(false)

    return (
        <>
            <div>
                <h1>Search Users</h1>
                <input onChange={inputHandle} type='text'></input>
                <button onClick={()=>setSearcPerformed(true)} >Search</button>
                
                { 
                    searchPerformed&&search.map((user,k)=>{
                          return(
                            <h1 key={k}> {user} </h1>
                        )
                    })
                }
                
           </div>
        </>
    )

}



export default Search;