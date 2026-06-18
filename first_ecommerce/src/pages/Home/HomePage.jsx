import './styles/HomePage.css'
import Headers from '../../components/Headers'
import ProductContainer from './components/ProductContainer'



function HomePage({dataCart, setDataCart, data, setData}) {
    
    return (
        <>
            <title>Ecommerce Project</title>
            <link rel="icon" type="image/svg+xml" href="/images/home-favicon.png" />


            {/* Here we make the header into compnent instead to avoid repetition */}
            <Headers 
                dataCart={dataCart}
            />


            <div className="home-page">
                
                <ProductContainer
                    data = {data}
                />

            </div>
        </>
    )
}

export default HomePage