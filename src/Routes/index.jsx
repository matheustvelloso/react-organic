import { BrowserRouter, Routes as Router, Route } from "react-router-dom";
import About from '../pages/About';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import ShopDetail from '../pages/Shop/ShopDetail';
import Contact from '../pages/Contact';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';

const Routes = () => (
    <BrowserRouter>
        <Router>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop/>} />
            <Route path="/shop/shop-detail" element={<ShopDetail/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout/>} />
        </Router>
    </BrowserRouter>
);

export default Routes; 