import React from 'react';
import users from '../constants/UsersData';
function Users() {
    const titleUsers = users.map(user => `${user.name} ${user.lastname}, ${user.age}, ${user.city}`);

    return (
        <div>
            {titleUsers.map((title, index) => (
                <div key={index}>
                    <p>{title}</p>
                </div>
            ))}
        </div>
    );
}

export default Users;
