import React from 'react'
import UserRow from './UserRow';
import './TableUsers.css';
import users from '../constants/UsersData';


function TableUsers() {

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Lastname</th>
                        <th>Age</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    <UserRow users={users} />
                </tbody>
            </table>
        </div>
    );

}

export default TableUsers