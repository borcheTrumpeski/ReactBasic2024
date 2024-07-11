import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/products/${id}`);
                setProduct(response.data);
            } catch (err) {

            }
        };

        fetchProduct();
    }, [id]);


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
                <div>Product not found</div>
            )}
        </div>
    );

};

export default Product;
