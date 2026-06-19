import ProductList from "./ProductList";

function ProductContainer({data, loadCart}){
    

    if (data && data.length > 0){
        return(
            <div className="products-grid">
                        
                        {data.map((product) => {
                            return (
                                <ProductList 
                                    key= {product.id}
                                    product = {product} 
                                    loadCart={loadCart}
                                />
                            );
                        })}

                    </div>
        );
    }else{
        return(
            <h1>Loading...</h1>
        );
    }
}


export default ProductContainer