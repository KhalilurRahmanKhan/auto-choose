import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Products from './components/Products/Products';
import data from './data';

function App() {
  const [products,setProducts] = useState([]);
  const [cart,setCart] = useState([]);
  useEffect(() => {
    setProducts(data);
  },[]);

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
     <div className='row d-flex flex-column-reverse flex-md-row
'>
       <div className='col-md-9 '>
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
     <div className='card my-3 p-3'>
       <h3>How react works?</h3>
       <p>React is a library of javascript.It uses jsx syntex to view html.React creates the html element through javascript.It creates a virtual dom tree to identify the changes. It uses babel transpiler in behind the scene.</p>
     </div>
     <div  className='card my-3 p-3'>
       <h3>Difference between props vs state?</h3>
       <p>Props is used to share data in various component. State is responsible for storing the data. We can store the data and update the data in state. This data or state can be passed through props later.</p>
     </div>
    



    </div>
  );
}

export default App;
