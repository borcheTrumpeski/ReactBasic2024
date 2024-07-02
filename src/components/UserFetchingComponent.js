import React, { useState, useEffect } from 'react';

const UserFetchingComponent = () => {
    const [data, setData] = useState([]);
    const [showData, setShowData] = useState(false);
    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(response => response.json())
            .then(data => {
                setData(data.users);
            })
            .catch(error => {
            });
    }, []);

    const handleButtonClick = () => {
        setShowData(true);
    };

    return (
        <div>
            <button onClick={handleButtonClick}>Show Users</button>
            {showData && (
                <div>
                    {data.length === 0 ? (
                        <p>There are no users</p>
                    ) : (
                        <ul>
                            {data.map(user => (
                                <li key={user.id}>{user.firstName} {user.lastName}</li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
};

export default UserFetchingComponent;
