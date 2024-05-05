import React from 'react';
import useFetch from '../../utils/useFetch';
import "./Product.css";

const Product = () => {
    const API_URL = "https://fakestoreapi.com/products";
    const data = useFetch(API_URL);
    console.log(data);

    if (!Array.isArray(data)) {
        return <div>Loading...</div>; 
    }

    return (
        <div className="product-container">
            {data.map(product => (
                <div className="product-data" key={product.id}>
                    <p className="product-category">{product.category}</p>
                    <img className="product-image" src={product.image} alt={product.title} />
                    <p className="product-title">{product.title}</p>
                </div>
            ))}
        </div>
    );
}

export default Product;
