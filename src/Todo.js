import React, { useState } from 'react'

function Todo() {
    const [name, setName] = useState("")
    const [addNames, setAddNames] = useState([])

    const handleInput = (event) => {
        setName(event.target.value)

    }
    const addElements = () => {
        const test = { id: 1, name: name }
        console.log(test)
        const proba = [...addNames, name]
        setAddNames(proba)
    }

    const brishi = (indexV) => {
        const updateName = addNames.filter((name, index) => name !== indexV)

        console.log('ova e ',indexV,'ova e name',name,'ova e index ')
        setAddNames(updateName)
        const zaid = [
            { id: '1', name: 'bojan' }, { id: '2', name: 'petar' }
        ]


    }
    return (
        <div>
            <input type='text' onChange={handleInput}></input>
            <button onClick={addElements}>Add name</button>


            {
                addNames.map((text, i) => {
                    return (<>

                        <h1 key={i}>{text}</h1>
                        <button onClick={() => brishi(text)}>brishi</button> </> /* onClick=zagrada()=>brishi(text)zagrada>*/
                    )
                })


            }


        </div>
    )
}

export default Todo