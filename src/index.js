import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AgifyComponent from './components/Agify';
import CatFactComponent from './components/CatFactComponent';
import MojaPrvaLjubov from './components/MojaPrvaLjubov';
import Posts from './components/Posts';
import ProductsComponent from './components/ProductsComponent';
import ExcuseComponent from './components/ExcuseComponent';
import SearchUsers from './components/SearchUsers';
import DataFetchingComponent from './components/DataFetchingComponent ';
import SeasonRadioButtons from './components/SeasonRadioButtons';
import UserFetchingComponent from './components/UserFetchingComponent';
import Counter from './components/Counter';
import TableUsers from './components/TableUsers';
import Todo from './components/Todo';
import UserCard from './components/UserCard';
import Users from './components/Users';
import Error from './components/Error';
import Product from './components/Product';
import GetAllUsers from './components/GetAllUsers';
import GetUserById from './components/GetUserById';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <MojaPrvaLjubov /> },
      { path: "agify", element: <AgifyComponent /> },
      { path: "catfact", element: <CatFactComponent /> },
      { path: "post", element: <Posts /> },
      { path: "products", element: <ProductsComponent /> },
      { path: "excuse", element: <ExcuseComponent /> },
      { path: "searchusers", element: <SearchUsers /> },
      { path: "datafetching", element: <DataFetchingComponent /> },
      { path: "seasonradiobuttons", element: <SeasonRadioButtons /> },
      { path: "userfetching", element: <UserFetchingComponent /> },
      { path: "counter", element: <Counter /> },
      { path: "tableusers", element: <TableUsers /> },
      { path: "todo", element: <Todo /> },
      { path: "usercard", element: <UserCard /> },
      { path: "users", element: <Users /> },
      { path: "product/:id", element: <Product /> },
      {
        path: "getallusers",
        element: <GetAllUsers />,
        children: [
          { path: ":id", element: <GetUserById /> },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
