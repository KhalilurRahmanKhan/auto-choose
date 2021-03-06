import React from 'react';

const Cart = ({cart,setCart}) => {
    const handleReset = () => {
        setCart([]);
    }
    const handleChoose = () => {
        setCart([cart[Math.floor(Math.random()*(cart.length))]]);
    }
    return (
        <div className='card p-2'>
            <b className='text-center bg-primary p-2'>Cart</b>
            <div>
                {
                    cart.map(item => <li key={item.id}>{item.name}</li>)
                }
            </div>
            <div className='text-center'>
            <button onClick={handleChoose} className='btn btn-outline-primary m-1'>Choose 1 for me</button><br />
            <button onClick={handleReset} className='btn btn-outline-info mb-1'>Choose again</button>

            </div>
        </div>
    );
};

export default Cart;