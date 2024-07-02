import React from 'react'

function UsersForCard({ users }) {
    return (
        <div>
            {users.map((user, index) => (
                <div key={index}>
                    <p>Name: {user.name}</p>
                    <p>Lastname: {user.lastname}</p>
                </div>
            ))}
        </div>
    );
}

export default UsersForCard