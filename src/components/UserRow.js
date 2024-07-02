import React from 'react';
import './TableUsers.css';

function UserRow({ users }) {
    return (
        <>
            {users.map((user, index) => (
                <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.lastname}</td>
                    <td>{user.age}</td>
                    <td>{user.city}</td>
                </tr>
            ))}
        </>
    );
}

export default UserRow;
