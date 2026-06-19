import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import '../styles/Modal.css'

function Modal({ closeModal, loadCart, productIdUpdate, initialQuantity }) {
    const [itemsUpdate, setItemsUpdate] = useState(initialQuantity);

    function inputNumber(event){
    const typedValue = event.target.value;

    if (typedValue === '') {
        setItemsUpdate('');
    } else {

        setItemsUpdate(Number(typedValue));
    }
}

    const updateMyCart = async () => {
        // Safety net if walang naglagay ng number then nag accept
        const finalQuantity = itemsUpdate === '' || itemsUpdate < 1 ? 1 : itemsUpdate;

        await axios.put(`http://localhost:3000/api/cart-items/${productIdUpdate}`,
            {
                quantity : finalQuantity
            }

        );

        await loadCart();
        closeModal();
    };
   
    return (
        <>
            <div className="modal-overlay">
                <div className="modal-content">
                    <h2>Update Quantity</h2>
                    <input 
                        type = 'number' 
                        onChange={inputNumber}
                        value={itemsUpdate}
                        placeholder='Enter number quantity'
                    />
                    
                    
                    <div className='button-container'>
                        <button  style = {{backgroundColor: '#ec6b6b'}} onClick={closeModal}>
                            Cancel
                        </button>

                        <button style = {{backgroundColor: '#33b249'}} onClick={updateMyCart}>
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal