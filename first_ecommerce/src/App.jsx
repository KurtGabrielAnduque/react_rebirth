import { Routes, Route } from 'react-router'
import './App.css'
import HomePage from './pages/Home/HomePage'
import CheckoutPage from './pages/Checkout/CheckoutPage'
import OrdersPage from './pages/Order/OrdersPage'
import TrackingPage from './pages/Tracking/TrackingPage'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  // for cart api
  const [dataCart, setDataCart] = useState([]);
  // for products api
  const [data, setData] = useState([]);
    
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


    useEffect(() => {
        fetchData();
        loadCart();
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
                                            />}
        />

        <Route path = '/orders' element = {<OrdersPage 
                                              dataCart={dataCart} 
                                              data={data}
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
