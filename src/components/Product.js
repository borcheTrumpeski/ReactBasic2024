import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/products/${id}`);
                setProduct(response.data);
            } catch (err) {
                setNotFound(true);
            }
        };

        fetchProduct();
    }, [id]);

    if (notFound) {
        return <div>Product with id "{id}" not found</div>;
    }

    return (
        <div>
            {product ? (
                <>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <img src={product.thumbnail} alt={product.title} />
                </>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default Product;
