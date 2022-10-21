import Container from "../../Components/Container";
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import checkout from "../../assets/checkout.png"
import BannerCheckout from "../../Components/BannerCheckout"
import DivCheckout from "./DivCheckout";
import SelectCheckout from "./SelectCheckout"
import { BtnPlaceOrder, PaymentContainer, SectionTitle } from "./styles";
import RadioButtonList from "../../Components/RadioButtonList";


const Checkout = () => {
    
    return (
        <>
            <Header className="bg-white pb-5 pt-3" />
            <BannerCheckout>
                <div className="d-flex justify-content-center pt-5 pb-5">
                    <h2 className="text-white pb-5 pt-5">Checkout</h2>
                </div>
            </BannerCheckout>
            <main className="bg-white">
                <Container>
                    <div className="pt-4 pb-4">
                        <DivCheckout 
                            text="Returning customer"
                            link="Click here to login"
                        />
                        <DivCheckout 
                            text="Have a coupon"
                            link="Click here to enter your code"
                        />
                    </div>
                    <div className="row pb-5">
                        <SectionTitle>Billing Details</SectionTitle>
                        <form>
                            <div className="row g-4">
                                <div className="col-md-6 form-group">
                                    <label>First Name *</label>
                                    <input type="name" className="form-control mt-3" />
                                </div>
                                <div className="col-md-6 form-group">                            
                                    <label>Last Name *</label>
                                    <input type="name" className="form-control mt-3" />                         
                                </div>
                                <div className="col-12 form-group">
                                    <label>Company Name *</label>
                                    <input type="name" className="form-control mt-3" />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Email Address *</label>
                                    <input type="email" className="form-control mt-3" />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Phone *</label>
                                    <input type="tel" className="form-control mt-3" />
                                </div>
                                <div className="col-md-6 form-group">
                                    <SelectCheckout/>
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Address *</label>
                                    <input type="address" className="form-control mt-3" />
                                </div>
                                <div className="col-12 form-group">
                                    <label>Town / City *</label>
                                    <input type="text" className="form-control mt-3" />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Postcode / Zip *</label>
                                    <input type="text" className="form-control mt-3" />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Province *</label>
                                    <input type="text" className="form-control mt-3" />
                                </div>
                                <div>
                                    <input type="checkbox" className="me-2"/>
                                    <label>Create an account?</label>
                                </div>
                            </div>     
                        </form>
                        <div className="pt-3">
                            <SectionTitle>Your order</SectionTitle>
                            <div className="row pt-5 ms-1">
                                <table className="table border p-th-td">
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Salad x 1</td>
                                            <td>$2.26</td>
                                        </tr>                                
                                        <tr>
                                            <td>Apple x 1</td>
                                            <td>$4.05</td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td>Subtotal</td>
                                            <td>$6.31</td>
                                        </tr>
                                        <tr>
                                            <td>Shipping</td>
                                            <td>Flat Rate</td>
                                        </tr>
                                        <tr>
                                            <td>Total</td>
                                            <td>$6.31</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <div>
                                <RadioButtonList
                                    name="payment"
                                    radioButtons={[
                                        {
                                            id: "checkPayments",
                                            value: "checkPayments",
                                            label: "Check Payments",
                                            message:
                                                <PaymentContainer className="mt-4 mb-4 ms-4">
                                                    <span>
                                                        Please send a check to Store Name, Store Street, Store Town, Store State 
                                                        / County, Store Postcode
                                                    </span>
                                                </PaymentContainer>,
                                        },
                                        {
                                            id: "paypal",
                                            value: "paypal",
                                            label: 
                                                <>
                                                    PayPal 
                                                    <img className="img-fluid px-4" src={checkout} alt="" /> 
                                                    <a className="link-secondary" href="#">What is Paypal?</a>
                                                </>,                                               

                                            message: 
                                                <PaymentContainer className="mt-4 mb-4 ms-4">
                                                    <span>
                                                        Please send a check to Store Name, Store Street, Store Town, Store State 
                                                        / County, Store Postcode
                                                    </span>
                                                </PaymentContainer>,                                          
                                        },
                                    ]}
                                />                                                                                            
                            </div>
                            <div className="pt-3">
                                <BtnPlaceOrder>PLACE ORDER</BtnPlaceOrder>
                            </div>
                        </div>
                    </div>
                </Container>
            </main>
            <Footer />
        </>
    );
}

export default Checkout;