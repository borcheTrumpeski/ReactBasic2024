import React, { useState } from 'react';

const SearchUsers = () => {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');

    const handleSearch = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/users/search?q=${query}`);
            const result = await response.json();
            setData(result.users);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search users"
            />
            <button onClick={handleSearch} disabled={query === '' ? true : false}>Search</button>
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
    );
};

export default SearchUsers;
