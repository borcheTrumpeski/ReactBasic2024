import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const GetUserById = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    const fetchUser = async () => {
        try {
            const response = await axios.get(`https://dummyjson.com/users/${id}`);
            setUser(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        if (id) {
            fetchUser();
        }
    }, [id]);

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>User Details</h1>
            <p>First Name: {user.firstName}</p>
            <p>Last Name: {user.lastName}</p>
        </div>
    );
};


export default GetUserById;
