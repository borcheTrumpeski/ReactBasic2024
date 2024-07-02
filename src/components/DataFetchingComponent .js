import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetchingComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(response => {
                setData(response.data.products);
            })
            .catch(error => {
            });
    }, []);


    return (
        <div>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default DataFetchingComponent;
