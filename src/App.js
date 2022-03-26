import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Products from './components/Products/Products';

function App() {
  const [products,setProducts] = useState([]);
  const [cart,setCart] = useState([]);
  useEffect(() => {
    fetch('./data.js')
    .then(response => response.json())
    .then(data => setProducts(data));
  },[])

  const handleClick = (data) => {
    const newCart = [...cart,data];
    setCart(newCart);
  }

  return (
    <div className="App container">
     <div className='mb-5 mt-2'>
     <h1 className='text-center'>Auto choose</h1>
      <p className='text-center mb-3'><i>Choose automaticly</i></p>
     </div>
     <div className='row'>
       <div className='col-md-9'>
       <div className='row'>
         {
           products.map(product => <Products data={product} key={product.id} handleClick={handleClick}></Products>)
         }
          </div>
       </div>
       <div className='col-md-3'>
        <Cart cart={cart} setCart={setCart}></Cart>
       </div>
     </div>



    </div>
  );
}

export default App;
