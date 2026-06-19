import { Routes, Route } from 'react-router'
import './App.css'
import HomePage from './pages/Home/HomePage'
import CheckoutPage from './pages/Checkout/CheckoutPage'
import OrdersPage from './pages/Order/OrdersPage'
import TrackingPage from './pages/Tracking/TrackingPage'
import { useEffect, useState } from 'react'
import axios from 'axios'

window.axios = axios;

function App() {
  // for cart api
  const [dataCart, setDataCart] = useState([]);
  // for products api
  const [data, setData] = useState([]);
  // for order
  const [ordersData, setOrdersData] = useState([]);

    const fetchData = async () => {
            try{
                const response = await axios.get('http://localhost:3000/api/products');
                setData(response.data);
                
            }catch (error){
                console.log(`Error Fetching Data: ${error}`);
            }
        };  

    const loadCart = async () => {
            try{
                const responseCart = await axios.get('http://localhost:3000/api/cart-items?expand=product');
                setDataCart(responseCart.data);
                console.log(responseCart.data);
                
            }catch (error){
                console.log(`Error Fetching Dat: ${error}`);
            }
        }

    const ordersFetchData = async () => {
            try {
                let response = await axios.get('http://localhost:3000/api/orders?expand=products');
                setOrdersData(response.data);

            } catch (error) {
                console.log(`Failed Data Fetch: ${error}`);
            }
        };

    useEffect(() => {
        fetchData();
        loadCart();
        ordersFetchData();
    }, []);

  return (
    <>
      

      <Routes>
        {/* First page or Homepage route*/}
        <Route index element = {<HomePage  
                                  dataCart={dataCart} 
                                  setDataCart={setDataCart} 
                                  data={data} 
                                  setData={setData}
                                  loadCart = {loadCart}
                                />}
        />


        <Route path = '/checkout' element= {<CheckoutPage 
                                              dataCart={dataCart}  // here the result of get??
                                              setDataCart={setDataCart} 
                                              loadCart = {loadCart}
                                              ordersData = {ordersData}
                                              ordersFetchData = {ordersFetchData}
                                            />}
        />

        <Route path = '/orders' element = {<OrdersPage 
                                              dataCart={dataCart} 
                                              ordersData={ordersData}
                                              setOrdersData={setOrdersData}
                                              loadCart = {loadCart}
                                          />}
        />
        
        <Route path = '/tracking' element = { <TrackingPage 
                                                dataCart={dataCart}
                                            />}
        />
      </Routes>
    </>
  )
}

export default App
