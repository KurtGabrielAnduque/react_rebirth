function CartSummary({ dataCart }) {
    let totalQuantity = 0;
    let total = 0;
    let ShippingPrice = 0;


    dataCart.forEach((cartItem) => {
        totalQuantity += cartItem.quantity;
        total += (cartItem.product.priceCents / 100) * cartItem.quantity;

        if (cartItem.deliveryOptionId === '2') {
            ShippingPrice += 4.99;
        } else if (cartItem.deliveryOptionId === '3') {
            ShippingPrice += 9.99;
        }
    })

    let totalBeforeTax = total + ShippingPrice;
    let estimatedTax = (ShippingPrice + total) * 0.1;
    let OrderTotal = totalBeforeTax + estimatedTax;

    return (
        <>
            <div className="payment-summary-title">
                Payment Summary
            </div>

            <div className="payment-summary-row">
                <div>Items ({totalQuantity}):</div>
                <div className="payment-summary-money">${total.toFixed(2)}</div>
            </div>

            <div className="payment-summary-row">
                <div>Shipping &amp; handling:</div>
                <div className="payment-summary-money">${ShippingPrice.toFixed(2)}</div>
            </div>

            <div className="payment-summary-row subtotal-row">
                <div>Total before tax:</div>
                <div className="payment-summary-money">${totalBeforeTax.toFixed(2)}</div>
            </div>

            <div className="payment-summary-row">
                <div>Estimated tax (10%):</div>
                <div className="payment-summary-money">${estimatedTax.toFixed(2)}</div>
            </div>

            <div className="payment-summary-row total-row">
                <div>Order total:</div>
                <div className="payment-summary-money">${OrderTotal.toFixed(2)}</div>
            </div>

            <button className="place-order-button button-primary">
                Place your order
            </button>
        </>
    );
}

export default CartSummary