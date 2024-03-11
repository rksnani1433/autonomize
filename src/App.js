import './App.css';
import Products from './Products/index.js';
import ProductDetails from './ProductDetails/index.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App=()=>(
  <div>
    <Router>
      <Routes>
        <Route exact path='/products' element={<Products/>}/> 
        <Route  path='/products/:id' element={<ProductDetails/>}/> 
      </Routes>
    </Router>
    {/* <Products /> */}
  </div>
)
export default App;
