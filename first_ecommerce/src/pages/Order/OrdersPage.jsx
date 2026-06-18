import './styles/OrderPage.css'
import { useEffect, useState} from 'react'
import axios from 'axios'
import Headers from '../../components/Headers'
import DisplayOrders from './components/DisplayOrders'


function OrdersPage({ dataCart, data }) {
    const [ordersData, setOrdersData] = useState([]);

    useEffect(() => {

        let ordersFetchData = async () => {
            try {
                let response = await axios.get('http://localhost:3000/api/orders?expand=products');
                setOrdersData(response.data);

            } catch (error) {
                console.log(`Failed Data Fetch: ${error}`);
            }
        };
        ordersFetchData();
    }, [])

    return (
        <>
            <title>Order Page</title>
            {/* Here we make the header into compnent instead to avoid repetition */}
            <Headers dataCart={dataCart} />

            <link rel="icon" type="image/svg+xml" href="/images/orders-favicon.png" />

            <div className="orders-page">
                <div className="page-title">Your Orders</div>

                <div className="orders-grid">
                    <DisplayOrders ordersData={ordersData} setOrdersData={setOrdersData} />
                </div>
            </div>
        </>
    )
}

export default OrdersPage