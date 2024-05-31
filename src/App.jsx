import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
import Index from "./pages/Index.jsx";
import ShoppingCart from './pages/ShoppingCart';

import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState(0); // Example state for cart items
  return (
    <div>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#f8f9fa' }}>
        <Link to="/">Home</Link>
        <Link to="/cart" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <FaShoppingCart size={24} />
          {cartItems > 0 && (
            <span style={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              background: 'red',
              color: 'white',
              borderRadius: '50%',
              padding: '0.2rem 0.5rem',
              fontSize: '0.8rem'
            }}>
              {cartItems}
            </span>
          )}
        </Link>
      </nav>
    <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
        <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
