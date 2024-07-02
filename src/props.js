import React from "react";

function Props(props){


return(
//     <div className="da">
// <p className="d">Име :{props.name} </p>
// <p className="d">Prezime :{props.surname} </p>
// <p className="d">Godini :{props.age} </p>

//     </div>
   
       <>
       <div className="Main">
        <div className="divs">
        <div className="img">
            <img className="img" alt="img" src={props.img}></img>
        </div>
        <div key={props.key} className="p">
            <h1 className="card-name" >{props.name}</h1>
            <h3 className="card-type">{props.surname}</h3>
            <p className="card-distance">{props.age}</p>
         <a href={props.src}><button>Повеке</button></a>
          
        </div>
</div>
       </div>
       </>

)


}
export default Props;