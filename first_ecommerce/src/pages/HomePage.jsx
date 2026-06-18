import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';

import './styles/EachPage/HomePage.css'
import Headers from '../components/Headers'
import CheckMark from '../assets/images/icons/checkmark.png'
import money from '../utils/money';


function ProductContainer({data}){
    if (data && data.length > 0){
        return(
            <div className="products-grid">
                        
                        {data.map((product) => {
                            return (
                                <div key = {product.id} className="product-container">
                                    <div className="product-image-container">
                                        <img className="product-image"
                                            src= {product.image}/>
                                    </div>

                                    <div className="product-name limit-text-to-2-lines">
                                        {product.name}
                                    </div>

                                    <div className="product-rating-container">
                                        <img className="product-rating-stars"
                                            src= {`images/ratings/rating-${product.rating.stars * 10}.png`}/>
                                        <div className="product-rating-count link-primary">
                                            {product.rating.count}
                                        </div>
                                    </div>

                                    <div className="product-price">
                                        {money(product.priceCents)}
                                    </div>

                                    <div className="product-quantity-container">
                                        <select>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>

                                    <div className="product-spacer"></div>

                                    <div className="added-to-cart">
                                        <img src={CheckMark} />
                                        Added
                                    </div>

                                    <button className="add-to-cart-button button-primary">
                                        Add to Cart
                                    </button>
                                </div>
                            );
                        })}

                    </div>
        );
    }else{
        return(
            <h1>Loading...</h1>
        );
    }
}


function HomePage({dataCart, setDataCart, data, setData}) {
    
    return (
        <>
            <title>Ecommerce Project</title>
            <link rel="icon" type="image/svg+xml" href="/images/home-favicon.png" />


            {/* Here we make the header into compnent instead to avoid repetition */}
            <Headers 
                dataCart={dataCart}
            />


            <div className="home-page">
                
                <ProductContainer
                    data = {data}
                />

            </div>
        </>
    )
}

export default HomePage