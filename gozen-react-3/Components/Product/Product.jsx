import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Product.css"

const Product = () => {
    const [productData, setProductData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const API_URL = 'https://fakestoreapi.com/products';

    useEffect(() => {
        handleClick();
    }, []);

    const handleClick = async () => {
        try {
            const { data } = await axios.get(API_URL);
            console.log(data)
            setTimeout(() => {
                setProductData(data);
                setIsLoading(false);
            }, 7000);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="product-container">
            {isLoading ? (
                <p>Please wait for a few seconds while the products are being fetched from the API</p>
            ) : (
                <div className='product'>
                    {productData.length > 0 ? (
                        productData.map((product) => (
                            <div key={product.id}>
                            
                            <div className='product'>
                            <h3 >{product.title}</h3>
                                <p>{product.price}</p>
                                <img src={product.image} className='image'/>
                            
                            </div>
                           
                                

                            </div>
                        ))
                    ) : (
                        <p>No products found</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Product;
