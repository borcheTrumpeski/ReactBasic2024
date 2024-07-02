import './App.css';
import ExcuseComponent from './components/ExcuseComponent';
// import SearchUsers from './components/SearchUsers';
// import DataFetchingComponent from './components/DataFetchingComponent ';
// import SeasonRadioButtons from './components/SeasonRadioButtons';
// import UserFetchingComponent from './components/UserFetchingComponent';
// import Counter from './components/Counter';
// import TableUsers from './components/TableUsers';
// import Todo from './components/Todo';
// import React, { useState } from 'react';

// import UserCard from './components/UserCard';
// import MojaPrvaLjubov, { title } from './components/MojaPrvaLjubov';
// import Users from './components/Users';

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
        <MojaPrvaLjubov /> */}
        {/* <Users /> */}
        {/* <UserCard />
        <TableUsers /> */}
        {/* <Counter /> */}
        {/* <button onClick={toggleComponent}>
          {isComponentVisible ? 'Hide' : isComponentVisible === false && isComponentVisible !== null ? 'Show' : 'Press me'}
        </button>
        {isComponentVisible && <Todo />} */}
        {/* <Todo /> */}
        {/* <DataFetchingComponent /> */}
        {/* <SeasonRadioButtons /> */}
        {/* <UserFetchingComponent /> */}
        {/* <SearchUsers /> */}
        <ExcuseComponent />
      </header>
    </div>
  );
}

export default App;
