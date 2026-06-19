import dayjs from 'dayjs';
import money from '../../../utils/money';
import { Fragment } from 'react';
import BuyAgainIcon from '../../../assets/images/icons/buy-again.png'
import axios from 'axios';

function DisplayOrders({ ordersData, setOrdersData, loadCart }) {

    function OrderedItems({ productItems, loadCart }) {
        return (
            <>
                {
                    productItems.map((productItem) => {

                        const addToCart = async () => {
                            await axios.post('http://localhost:3000/api/cart-items',
                                {
                                    productId: productItem.productId,
                                    quantity: 1
                                }
                            );

                            await loadCart();
                        }

                        return (
                            <Fragment key={productItem.product.id}>
                                <div className="product-image-container">
                                    <img src={productItem.product.image} />
                                </div>

                                <div className="product-details">
                                    <div className="product-name">
                                        {productItem.product.name}
                                    </div>
                                    <div className="product-delivery-date">
                                        Arriving on: {dayjs(productItem.estimatedDeliveryTimeMs).format('MMMM D')}
                                    </div>
                                    <div className="product-quantity">
                                        Quantity: {productItem.quantity}
                                    </div>
                                    <button className="buy-again-button button-primary"
                                        onClick={addToCart}
                                    >
                                        <img className="buy-again-icon" src={BuyAgainIcon} />
                                        <span className="buy-again-message">
                                            Add to Cart
                                        </span>
                                    </button>
                                </div>

                                <div className="product-actions">
                                    <a href="/tracking">
                                        <button className="track-package-button button-secondary">
                                            Track package
                                        </button>
                                    </a>
                                </div>
                            </Fragment>
                        );
                    })
                }
            </>
        );
    }


    return (
        <>
            {ordersData.map((dataOrder) => {
                return (
                    <div key={dataOrder.id} className="order-container">

                        <div className="order-header">
                            <div className="order-header-left-section">
                                <div className="order-date">
                                    <div className="order-header-label">Order Placed:</div>
                                    <div>{dayjs(dataOrder.orderTimeMs).format('MMMM D')}</div>
                                </div>
                                <div className="order-total">
                                    <div className="order-header-label">Total:</div>
                                    <div>{money(dataOrder.totalCostCents)}</div>
                                </div>
                            </div>

                            <div className="order-header-right-section">
                                <div className="order-header-label">Order ID:</div>
                                <div>{dataOrder.id}</div>
                            </div>
                        </div>


                        <div className="order-details-grid">
                            <OrderedItems
                                productItems={dataOrder.products}
                                loadCart={loadCart}
                            />
                        </div>
                    </div>
                );
            })}
        </>
    );
}
export default DisplayOrders