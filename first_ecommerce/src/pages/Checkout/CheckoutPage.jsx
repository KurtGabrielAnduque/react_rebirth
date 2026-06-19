import './styles/CheckoutPage.css'
import './styles/CheckoutPageHeader.css'
import { Link } from 'react-router'
import axios from 'axios'
import { useState, useEffect } from 'react'

import Logo from '../../assets/images/logo.png'
import MobileLogo from '../../assets/images/mobile-logo.png'
import CheckoutLockIcon from '../../assets/images/icons/checkout-lock-icon.png'
import CartItemContainer from './components/CartItemContainer'
import CartSummary from './components/CartSummary'




function CheckoutPage({ dataCart, setDataCart, loadCart }) {

    const [deliveryOptions, setDeliveryOption] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    
    // mine
    useEffect(() => {
        const fetchDeliveryData = async () => {
            try {
                const responseDelivery = await axios.get('http://localhost:3000/api/delivery-options?expand=estimatedDeliveryTime');
                setDeliveryOption(responseDelivery.data);


            } catch (error) {
                console.log(`Failed Fetch Data: ${error}`)
            }finally{
                setisLoading(false);
            }
        };

        fetchDeliveryData();

    }, [])

    
    if (isLoading) {
        return (
            <>
                <div className='loading-screen'>
                    <h1>LOADING PLEASE WAIT</h1>
                </div>
            </>
        );
    }

    let orderQuantity = 0;
    dataCart.forEach((cartItem) => {
        orderQuantity += cartItem.quantity;
    });


    return (
        <>
            <title>Checkout Page</title>
            <link rel="icon" type="image/svg+xml" href="/images/cart-favicon.png" />

            <div className="checkout-header">
                <div className="header-content">
                    <div className="checkout-header-left-section">
                        <Link to="/">
                            <img className="logo" src={Logo} />
                            <img className="mobile-logo" src={MobileLogo} />
                        </Link>
                    </div>

                    <div className="checkout-header-middle-section">
                        Checkout (<Link className="return-to-home-link"
                            to="/">{orderQuantity} items</Link>)
                    </div>

                    <div className="checkout-header-right-section">
                        <img src={CheckoutLockIcon} />
                    </div>
                </div>
            </div>

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <div className="order-summary">


                        <CartItemContainer
                            dataCart={dataCart}
                            deliveryOptions={deliveryOptions}
                            loadCart = {loadCart}
                        />


                    </div>

                    <div className="payment-summary">
                        <CartSummary dataCart={dataCart} loadCart = {loadCart}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckoutPage