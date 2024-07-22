import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom';

const GetAllUsers = () => {
    const [users, setUsers] = useState([]);

    const fetchAllUsers = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/users');
            setUsers(response.data.users);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchAllUsers();
    }, []);

    return (
        <div>
            <h1>All Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.firstName} {user.lastName}
                    </li>
                ))}
            </ul>

            <Outlet />
        </div>
    );
};

export default GetAllUsers;
