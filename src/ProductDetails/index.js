import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from 'react-icons/fa';
import './index.css';



const ProductDetails = () => {
    const [productData, setproductData] =useState({})
    let { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const productData = await response.json();
                console.log(productData);
                setproductData(productData);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        fetchData();
    }, [id]); // Fetch data 

    return (
        <div className="product-details-container">
            <div className="details-container">
                <img className="image-details" src={productData.image} alt={productData.title}/>
                <p className="product-title">{productData.title}</p>
                <p className="product-price"> Product Price :{productData.price}/-</p>
                <p className="category-product">category :   {productData.category}</p>
                <p className="description">{productData.description}</p>
                <div className="rating-container">
                     {productData.rating && (
                        <>
                            <p className="product-rating">{productData.rating.rate} <span><FaStar/></span></p>
                            <p className="rated-count">{productData.rating.count} Members Rated</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
