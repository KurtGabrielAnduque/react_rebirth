import React from 'react'
import money from '../../../utils/money';
import dayjs from 'dayjs';
import axios from 'axios';

function DeliveryOption({ deliveryOptions, cartproduct, loadCart }) {
    return (
        <div className="delivery-options">
            <div className="delivery-options-title">
                Choose a delivery option:
            </div>

            {deliveryOptions.map((deliveryOption) => {
                let priceString = 'FREE Shipping';

                if (deliveryOption.priceCents > 0) {
                    priceString = `${money(deliveryOption.priceCents)} - Shipping`;
                }
                //
                const updateDeliveryOptions = async () => {
                    await axios.put(`http://localhost:3000/api/cart-items/${cartproduct.productId}`,
                        {
                            deliveryOptionId: deliveryOption.id
                        }
                    );

                    await loadCart();
                };

                return (
                    <div key={deliveryOption.id} 
                        className="delivery-option"
                        onClick={updateDeliveryOptions}
                    >
                        <input type="radio"
                            checked={deliveryOption.id === cartproduct.deliveryOptionId}
                            className="delivery-option-input"
                            onChange={() => {}}
                            name={`delivery-option-${cartproduct.productId}`} />
                        <div>
                            <div className="delivery-option-date">
                                {dayjs(deliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                            </div>
                            <div className="delivery-option-price">
                                {priceString}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default DeliveryOption