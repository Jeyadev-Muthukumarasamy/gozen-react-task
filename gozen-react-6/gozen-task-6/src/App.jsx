import React, { useState, useEffect } from 'react';
import axios from "axios"
import "./App.css"

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setLoading(false);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className='product-container'>
      <h1>Product List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <h2 className = "product-name">{product.name}</h2>
              <img src={product.image} alt={product.name} className='product-image'/>
              <p className = "product-price">Price: {product.price}</p>
              <p>Description: {product.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;
