import React from 'react'
import UsersForCard from './UsersForCard';
import users from '../constants/UsersData';


function UserCard() {
    return (
        <div>
            <UsersForCard users={users} />
        </div>
    );

}

export default UserCard