import React, { useEffect, useState } from "react";




function Effect() {
    

    const[user,setUser]=useState([])
    const[search,setSearch]=useState('')

      const dd=()=>{
        
        fetch(`https://dummyjson.com/users`)
            .then(api => api.json())
            .then(data =>setUser(data.users))
          
      }

      const handleSearch=(event)=>{
           setSearch(event.target.value)
      }

    
    return(
        <>
          <button onClick={dd} >ss</button>
         {
            
       user.map(user=>{
        return(<h1>{user.firstName}</h1>)
       })

         }

        </>
    )


}

export default Effect;