import React from 'react'
import dayjs from 'dayjs';
import money from '../../../utils/money';
import DeliveryOption from './DeliveryOption';

function CartItemContainer({ dataCart, deliveryOptions }) {

    return (
        <>
            {dataCart.map((cartproduct) => {

                let selectedDeliveryOption = deliveryOptions.find((deliveryOption) => {
                    return deliveryOption.id === cartproduct.deliveryOptionId;
                })

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
                                    <span className="delete-quantity-link link-primary">
                                        Delete
                                    </span>
                                </div>
                            </div>

                            <DeliveryOption 
                                deliveryOptions = {deliveryOptions} 
                                cartproduct = {cartproduct}
                            />
                            
                        </div>
                    </div>
                );
            })}
        </>

    );
}

export default CartItemContainer