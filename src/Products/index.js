import './index.css';
import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchingData();
  }, []); // Empty dependency 

  return (
    <div className='main-container'>
      <h1 className='text-center text-light'>Exclusive Prime Products</h1>
      <div className='inner-container'>
     

        {data.map((item, index) => (
          <Link to={`/products/${item.id}`} key={index}>
          <li  className='product-container'>
            <img className='product-image' src={item.image} alt='' />
            <div className='d-flex flex-column'>
              <div className='d-flex justify-content-between'>
                <p className='product-name text-light'>{item.category}</p>
                <p className='product-rating'>
                  {item.rating.rate} <span className='icon'><FaStar /></span>
                </p>
              </div>
              <div className='text-start'>
                <p className='product-name text-light'>RS {item.price}/-</p>
              </div>
            </div>
          </li></Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
