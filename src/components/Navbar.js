import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

//link i navlink razlikata e navlink ima klasa i e polesen za stiluvanje na primer aktiv
function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">mojaprvaljubov</Link>
                </li>
                <li>
                    <Link to="/agify">agify</Link>
                </li>
                <li>
                    <Link to="/catfact">catfact</Link>
                </li>
                <li>
                    <Link to="/post">post</Link>
                </li>
                <li>
                    <Link to="/products">products</Link>
                </li>
                <li>
                    <Link to="/excuse">excuse</Link>
                </li>
                <li>
                    <Link to="/searchusers">searchusers</Link>
                </li>
                <li>
                    <Link to="/datafetching">datafetching</Link>
                </li>
                <li>
                    <Link to="/seasonradiobuttons">seasonradiobuttons</Link>
                </li>
                <li>
                    <Link to="/userfetching">userfetching</Link>
                </li>
                <li>
                    <Link to="/tableusers">tableusers</Link>
                </li>
                <li>
                    <Link to="/todo">todo</Link>
                </li>
                <li>
                    <Link to="/usercard">usercard</Link>
                </li>
                <li>
                    <Link to="/users">users</Link>
                </li>
                <li>
                    <Link to="/getallusers">getallusers</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
