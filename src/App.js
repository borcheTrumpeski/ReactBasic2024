import './App.css';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

// import React, { useState } from 'react';


function App() {
  // const [isComponentVisible, setComponentVisible] = useState(false);
  // const toggleComponent = () => {
  //   setComponentVisible(!isComponentVisible);
  // };
  // const name = 'viktor';
  // const age = 19;
  // const numbers = [1, 2, 3, 4];
  // const object = { name: 'borce', lastname: 'trumpeski' };
  // const objectsArray = [
  //   { name: 'borce', lastname: 'trumpeski' },
  //   { name: 'john', lastname: 'doe' },
  //   { name: 'jane', lastname: 'smith' }
  // ];
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Outlet />
        {/* <h1>{title}</h1>
        <p>
          Hello, {name}! You are {age} years old.
        </p>
        <p>
          {numbers.map((number, index) => (
            <span key={index}>{number} </span>
          ))}
        </p>
        <p>
          Name - {object.name}, Lastname - {object.lastname}
        </p>
        <p>
          {objectsArray.map((obj, index) => (
            <div key={index}>
              Name: {obj.name}, Lastname: {obj.lastname}
            </div>
          ))}
        </p>
        {/* <button onClick={toggleComponent}>
          {isComponentVisible ? 'Hide' : isComponentVisible === false && isComponentVisible !== null ? 'Show' : 'Press me'}
        </button>
        {isComponentVisible && <Todo />} */}
      </header>
    </div>
  );
}

export default App;
