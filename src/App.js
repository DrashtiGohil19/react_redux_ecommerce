import { Route, Routes } from 'react-router-dom';
import './App.css';
import Product from './components/product';
import Cart from './components/cart';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Product/> }></Route>
        <Route path='/cart' element={ <Cart/> }></Route>
      </Routes>
    </>
  );
}

export default App;
