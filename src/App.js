
import { useState } from "react";
import Effect from "./Effect";
import Exuses from "./Exuses";
import Find from "./Find";
function App() {

    


    const[componentExcuses,setStateForComponentExcuses]=useState(false)
    const[componentFind,setStateForComponentFind]=useState(false)
    const prikaziFreeFind=()=>{
        setStateForComponentFind(!componentFind)
    }




    const prikaziFreeEx=()=>{
        setStateForComponentExcuses(!componentExcuses)
    }

    return (
        <>
          
        <nav>
<button className="exuses-container " onClick={ prikaziFreeFind}>Find Users </button>

<button className="exuses-container " onClick={prikaziFreeEx}>Free Excuses</button>
</nav>

{
    componentExcuses&&<><Exuses />  <button className="exuses-container" onClick={prikaziFreeEx}>Skrij</button></>

}
{
    componentFind&&<Find />
}  </>


    )





}
export default App;