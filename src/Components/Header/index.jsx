import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import Container from '../Container';
import { MenuMobile, MenuOverlay, Nav, Select } from './styles'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdOutlineShoppingCart} from 'react-icons/md'
import { VscThreeBars, VscChromeClose } from 'react-icons/vsc'
import { useState } from 'react';

const Header = ({className}) => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    return (
        <>           
            <MenuOverlay isMenuOpened={isMenuOpened} onClick={() => setIsMenuOpened(false)} className="d-flex d-md-none position-fixed h-100 w-100"/>
            <MenuMobile isMenuOpened={isMenuOpened} className="d-flex flex-column d-md-none position-fixed bg-white">
                <VscChromeClose onClick={() => setIsMenuOpened(false)} className="align-self-end mb-5" />
                <Container>
                    <Nav className="d-flex flex-column justify-content-between align-items-center col">
                        <Link className="pb-4" to="/">HOME</Link>
                        <Link className="pb-4" to="/shop">SHOP</Link>
                        <Link className="pb-4" to="/about">ABOUT</Link>
                        <Link className="pb-4" to="/contact">CONTACT</Link>
                    </Nav>
                </Container>
            </MenuMobile>
            <header className={className}>
                <Container>
                    <div className="row mt-4 d-flex">
                        <div className="col col-xl-3">
                            <img className="img-fluid align-self-center" src={Logo} alt="logo" />
                        </div>
                        <Nav className="d-none d-md-flex justify-content-between align-items-center col">
                            <Link className="pe-5" to="/">HOME</Link>
                            <Link className="pe-5" to="/shop">SHOP</Link>
                            <Link className="pe-5" to="/about">ABOUT</Link>
                            <Link className="pe-5" to="/contact">CONTACT</Link>
                        </Nav>
                        <div className="d-flex justify-content-end align-items-center col">
                            <Select className="select" name="coin">
                                <option value="usd">USD</option>
                                <option value="vnd">VND</option>
                                <option value="eur">EUR</option>
                                <option value="jpy">JPY</option>
                            </Select>
                            <AiOutlineSearch className="fs-icon ms-3"/>
                            <Link to="/cart"><MdOutlineShoppingCart className="fs-icon ms-3 "/></Link> 
                            <VscThreeBars onClick={() => setIsMenuOpened(true)} className="fs-icon ms-3 d-block d-md-none"/>
                        </div>
                    </div>
                </Container>
            </header>
        </>
    );
}

export default Header;