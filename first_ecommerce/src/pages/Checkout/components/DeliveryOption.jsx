import React from 'react'
import money from '../../../utils/money';
import dayjs from 'dayjs';

function DeliveryOption({ deliveryOptions, cartproduct }) {
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

                return (
                    <div key={deliveryOption.id} className="delivery-option">
                        <input type="radio"
                            checked={deliveryOption.id === cartproduct.deliveryOptionId}
                            className="delivery-option-input"
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