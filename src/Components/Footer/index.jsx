import Container from "../Container";
import Logo from "../../assets/logo.png"
import creditCard1 from "../../assets/credit-card-01.png"
import creditCard2 from "../../assets/credit-card-02.png"
import creditCard3 from "../../assets/credit-card-03.png"
import creditCard4 from "../../assets/credit-card-04.png"
import { DivFooter, DivInput, Title, Input, Paragraph } from "./styles";
import {HiOutlineMail} from "react-icons/hi"
import {BsTelephone} from "react-icons/bs"
import {VscLocation} from "react-icons/vsc"
import { Link } from "react-router-dom";

const Footer = () => {  
    return (
        <footer className="bg-grey pt-3">
            <Container>
                <div className="d-lg-flex justify-content-evenly mt-5 mb-5 pb-5"> 
                    <div>
                        <img className="img-fluid mb-4" src={Logo} alt="logo" />
                        <Paragraph><span className="me-3"><VscLocation/></span>  379 5th Ave New York, NYC 10018</Paragraph>
                        <Paragraph><span className="me-3"><BsTelephone/></span>  (+1) 96 716 6879</Paragraph>
                        <Paragraph><span className="me-3"><HiOutlineMail/></span>   contact@site.com</Paragraph>
                    </div>
                    <hr />
                    <div>
                        <Title className="mb-4">SHOP</Title>
                        <Paragraph>Food</Paragraph>
                        <Paragraph>Farm</Paragraph>
                        <Paragraph>Health</Paragraph>
                        <Paragraph>Organic</Paragraph>
                    </div>
                    <hr />
                    <div>
                        <Title className="mb-4">SUPPORT</Title>
                        <Paragraph>Contact Us</Paragraph>
                        <Paragraph>FAQ</Paragraph>
                        <Paragraph>Privacy Policy</Paragraph>
                        <Paragraph>Blog</Paragraph>
                    </div>
                    <hr />
                    <div>
                        <Title className="mb-4">MY ACCOUNT</Title>
                        <Paragraph>Sign In</Paragraph>
                        <Paragraph>My Cart</Paragraph>
                        <Paragraph>My Wishlist</Paragraph>
                        <Paragraph>Check Out</Paragraph>
                    </div>
                    <hr />
                    <div>
                        <Title className="mb-4">NEWSLETTER</Title>
                        <Paragraph>Subscribe now to get daily updates</Paragraph>
                        <DivInput className="input py-1">
                            <Input className="ms-3 px-3" type="email" placeholder="Your email..." />
                            <Link to="/"><HiOutlineMail className="btn-email me-1"/></Link>
                        </DivInput>
                    </div>               
                </div>
            </Container>
            <DivFooter>
                <Container>
                    <div className="d-md-flex justify-content-between text-center">
                        <Paragraph>Copyright © 2017 Designed by AuThemes. All rights reserved.</Paragraph>
                        <div className="me-credit-card">
                            <img src={creditCard1} alt="creditCard1" />
                            <img src={creditCard2} alt="creditCard2" />
                            <img src={creditCard3} alt="creditCard3" />
                            <img src={creditCard4} alt="creditCard4" />
                        </div>
                    </div>
                </Container>          
            </DivFooter>
        </footer>
    );
}

export default Footer;