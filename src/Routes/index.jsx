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
            <Route path="/quem-somos" element={<About />} />
            <Route path="/produtos" element={<Shop/>} />
            <Route path="/produtos/produto" element={<ShopDetail/>} />
            <Route path="/contato" element={<Contact/>} />
            <Route path="/carrinho" element={<Cart/>} />
            <Route path="/pagamento" element={<Checkout/>} />
        </Router>
    </BrowserRouter>
);

export default Routes; 