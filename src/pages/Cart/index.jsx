import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import BannerCart from "../../Components/BannerCart"
import Container from "../../Components/Container";
import shop1 from "../../assets/shop1.jpg"
import shop6 from "../../assets/shop6.jpg"
import TableTbodyCart from "./TableTbodyCart";
import TableTheadCart from "./TableTheadCart";
import TableTfootCart from "./TableTfootCart"
import { Link } from "react-router-dom";
import { BtnCheckout, BtnRemove, InputCart, SectionTitle } from "./styles";
import TableTbodyCartMobile from "./TableTbodyCartMobile";
import TableTfootCartMobile from "./TableTfootCartMobile";
import useTitle from "../../hooks/useTitle";
import { useEffect } from "react";




const Cart = () => {
    const setTitle = useTitle()
    
    useEffect(() => {
        setTitle('Cart');
    }, [setTitle]);

    return (
        <>
            <Header className="bg-white pb-5 pt-3"/>
            <BannerCart>
                <div className="d-flex justify-content-center pt-5 pb-5">
                    <h2 className="text-white pb-5 pt-5">Shop Cart</h2>
                </div>
            </BannerCart> 
            <main className="bg-white">
                <Container>
                    <div className="pt-5 pb-5">
                        <table className="table d-none d-xl-table">
                            <thead className="bg-green">
                                <TableTheadCart />
                            </thead>
                            <tbody className="border">
                                <TableTbodyCart
                                    image={shop1}
                                    alt="salad"
                                    product="Salad"
                                    weight="0.4Kg"
                                    price="2.26"
                                    total="2.26"
                                />
                                <TableTbodyCart
                                    image={shop6}
                                    alt="Apple"
                                    product="Apple"
                                    weight="0.4Kg"
                                    price="2.26"
                                    total="2.26"
                                />
                            </tbody>
                            <tfoot className="border">
                                <TableTfootCart />
                            </tfoot>
                        </table>
                        <div className="row d-flex d-xl-none">
                            <table>
                                <tbody className="border">
                                    <TableTbodyCartMobile
                                        type="Product:"
                                        text="Salad"
                                    />
                                    <TableTbodyCartMobile
                                        type="Weight:"
                                        text="0.4Kg"
                                    />
                                    <TableTbodyCartMobile
                                        type="Quantity:"
                                        text={<InputCart type="number" placeholder="1"/>}
                                    />
                                    <TableTbodyCartMobile
                                        type="Price:"
                                        text="$2.26"
                                    />
                                    <TableTbodyCartMobile
                                        type="Total:"
                                        text="$2.26"
                                    />
                                    <TableTbodyCartMobile
                                        type=""
                                        text={<BtnRemove>x</BtnRemove>}
                                    />      
                                </tbody>
                                <tbody className="border">
                                    <TableTbodyCartMobile
                                        type="Product:"
                                        text="Apple"
                                    />
                                    <TableTbodyCartMobile
                                        type="Weight:"
                                        text="0.4Kg"
                                    />
                                    <TableTbodyCartMobile
                                        type="Quantity:"
                                        text={<InputCart type="number" placeholder="1"/>}
                                    />
                                    <TableTbodyCartMobile
                                        type="Price:"
                                        text="$2.26"
                                    />
                                    <TableTbodyCartMobile
                                        type="Total:"
                                        text="$2.26"
                                    />
                                    <TableTbodyCartMobile
                                        type=""
                                        text={<BtnRemove>x</BtnRemove>}
                                    />      
                                </tbody>
                            </table>
                            <table>
                                <tfoot className="border d-flex flex-column align-items-center">
                                    <TableTfootCartMobile/>
                                </tfoot>
                            </table>
                        </div>
                        <div className="pt-5 pb-5">
                            <SectionTitle>Cart Total</SectionTitle>
                            <div className="row">
                                <div className="col-md-8">
                                    <table className="table border">
                                        <tbody>
                                            <tr>
                                                <th className="col-4 p-4">Subtotal</th>
                                                <td className="col-6 p-4">$6.31</td>
                                            </tr>
                                            <tr>
                                                <th className="col-4 p-4">Total</th>
                                                <td className="col-6 p-4">$6.31</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div>
                                        <Link to="/checkout"><BtnCheckout>PROCEED TO CHECKOUT</BtnCheckout></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </main>
            <Footer/>
        </>
)};

export default Cart;