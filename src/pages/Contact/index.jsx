import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import BannerMain from "../../Components/BannerMain"
import { MdLocationOn, MdPhoneIphone, MdOutlineMailOutline } from "react-icons/md"
import Container from "../../Components/Container";
import { DivContact, LinkContact, P } from "./styles";
import useTitle from "../../hooks/useTitle";
import { useEffect } from "react";

const Contact = () => {
    const setTitle = useTitle()
    
    useEffect(() => {
        setTitle('Contact');
    }, [setTitle]);

    return (
        <>
            <Header className="bg-white pb-5 pt-3"/>
            <BannerMain>
                <div className="d-flex justify-content-center pt-5 pb-5">
                    <h2 className="text-white pb-5 pt-5">Blog Detail</h2>
                </div>
            </BannerMain>
            <main className="bg-white">
                <Container>
                    <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 d-flex justify-content-center gap-5 text-center hover pb-5 pt-5 ">
                        <DivContact className="col border-green p-4">
                            <div>
                                <MdLocationOn className="icon-box"/>
                                <P>12/2th Quincy St, NYC 12018</P>
                            </div>
                        </DivContact>
                        <LinkContact to="#" className="col border-green p-4">
                            <div>
                                <MdPhoneIphone className="icon-box"/>
                                <P>(+1) 11 321 4567 </P>
                            </div>
                        </LinkContact>
                        <LinkContact to="#" className="col border-green p-4">
                            <div>
                                <MdOutlineMailOutline className="icon-box"/>
                                <P>contact@site.com</P>
                            </div>
                        </LinkContact>
                    </div>
                </Container>
                <Container>
                    <div className="ratio ratio-16x9">
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3025.364506813366!2d-73.9441186841357!3d40.68796917933458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s12%2F2th%20Quincy%20St%2C%20NY%2012018!5e0!3m2!1spt-BR!2sbr!4v1657679746662!5m2!1spt-BR!2sbr" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    />
                    </div>
                </Container>
                <Container>
                    <div className="row pb-5">
                        <form>
                            <div className="col">
                                <div className="pt-5">
                                    <textarea 
                                    className="form-control"
                                    name="Message"
                                    rows="6" 
                                    id="" 
                                    placeholder="Your Message"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group pt-3">
                                        <input className="form-control p-3" type="text" placeholder="Your Name" autoComplete="one-time-code" />
                                    </div>
                                </div>
                                <div className="col-md-6 pt-3">
                                    <div className="form-group">
                                        <input className="form-control p-3" type="email" placeholder="Your Email" autoComplete="one-time-code"/>
                                    </div>
                                </div>
                            </div>
                                <div className="col pt-3">
                                    <input className="form-control p-3" type="tel" placeholder="Phone Number" autoComplete="one-time-code"/>
                                </div>
                            <div className="col pt-3">
                                <button className="btn-send" type="button">SEND EMAIL</button>
                            </div>
                        </form>
                    </div>
                </Container>
            </main>
            <Footer/>
        </>
)};

export default Contact;