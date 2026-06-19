import React from 'react'
import dayjs from 'dayjs';
import money from '../../../utils/money';
import DeliveryOption from './DeliveryOption';
import axios from 'axios';

function CartItemContainer({ dataCart, deliveryOptions, loadCart }) {

    return (
        <>
            {dataCart.map((cartproduct) => {

                let selectedDeliveryOption = deliveryOptions.find((deliveryOption) => {
                    return deliveryOption.id === cartproduct.deliveryOptionId;
                })
                
                const deleteItem = async () => {
                    await axios.delete(`http://localhost:3000/api/cart-items/${cartproduct.productId}`,
                        {
                            productId : cartproduct.productId
                        }
                    );
                    loadCart();
                }

                return (
                    <div key={cartproduct.id} className="cart-item-container">
                        <div className="delivery-date">
                            Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                        </div>

                        <div className="cart-item-details-grid">
                            <img className="product-image"
                                src={cartproduct.product.image} />

                            <div className="cart-item-details">
                                <div className="product-name">
                                    {cartproduct.product.name}
                                </div>
                                <div className="product-price">
                                    {money(cartproduct.product.priceCents)}
                                </div>
                                <div className="product-quantity">
                                    <span>
                                        Quantity: <span className="quantity-label">{cartproduct.quantity}</span>
                                    </span>
                                    <span className="update-quantity-link link-primary">
                                        Update
                                    </span>
                                    <span className="delete-quantity-link link-primary"
                                        onClick={deleteItem}
                                    >
                                        Delete
                                    </span>
                                </div>
                            </div>

                            <DeliveryOption 
                                deliveryOptions = {deliveryOptions} 
                                cartproduct = {cartproduct}
                                loadCart = {loadCart}
                            />
                            
                        </div>
                    </div>
                );
            })}
        </>

    );
}

export default CartItemContainer