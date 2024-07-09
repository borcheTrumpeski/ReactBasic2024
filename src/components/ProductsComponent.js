import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductsComponent = () => {
    const [products, setProducts] = useState([]);
    const [shopList, setShopList] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products');
                setProducts(response.data.products);
            } catch (error) {

            }
        };

        fetchProducts();
    }, []);

    const addToShopList = (product) => {
        setShopList([...shopList, product]);
    };

    const removeFromShopList = (productId) => {
        setShopList(shopList.filter(product => product.id !== productId));
    };

    return (
        <div>
            <h1>Products</h1>
            {products.length > 0 ? (
                <ul>
                    {products.map(product => (
                        <li key={product.id}>
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                            <button onClick={() => addToShopList(product)}>Add to Shop List</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading products...</p>
            )}

            <h1>Shop List</h1>
            {shopList.length > 0 ? (
                <ul>
                    {shopList.map((product) => (
                        <li key={product.id}>
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                            <button onClick={() => removeFromShopList(product.id)}>Remove from Shop List</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No products in shop list</p>
            )}
        </div>
    );
};

export default ProductsComponent;
