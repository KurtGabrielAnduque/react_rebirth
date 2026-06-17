import { Routes, Route } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import CheckoutPage from './pages/CheckoutPage'
import OrdersPage from './pages/OrdersPage'
import TrackingPage from './pages/TrackingPage'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [dataCart, setDataCart] = useState([]);
    
    useEffect(() => {
        

        const fetchDataCart = async () => {
            try{
                const responseCart = await axios.get('http://localhost:3000/api/cart-items?expand=product');
                setDataCart(responseCart.data);
                console.log(responseCart.data);
                
            }catch (error){
                console.log(`Error Fetching Dat: ${error}`);
            }
        }

        
        fetchDataCart();
    }, []);

  return (
    <>
      

      <Routes>
        {/* First page or Homepage route*/}
        <Route index element = {<HomePage  dataCart={dataCart} setDataCart={setDataCart}/>}/>
        <Route path = '/checkout' element= { <CheckoutPage dataCart={dataCart} setDataCart={setDataCart} />}/>
        <Route path = '/orders' element = { <OrdersPage dataCart={dataCart}/>}/>
        <Route path = '/tracking' element = { <TrackingPage/> }/>
      </Routes>
    </>
  )
}

export default App
