import React, { useEffect, useState } from "react";




function Effect() {
    const [state, setState] = useState('')
    const [get, setGet] = useState([])



    useEffect(() => {

        fetch(`https://dummyjson.com/users/${state}`)
            .then(api => api.json())
            .then(data => setGet(data))

    }, [state])
    return (
        <><button onClick={() => setState('users')}>Users</button>
            <button onClick={() => setState('products')}>Products</button>
            <button onClick={() => setState('posts')}>Posts</button>

            <h1>{state}</h1>
           
        </>
    )


}

export default Effect;