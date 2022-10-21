import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import Section from "../../../Components/Section"
import BannerMain from "../../../Components/BannerMain";
import Container from "../../../Components/Container";
import shop1 from "../../../assets/shop1.jpg";
import shop2 from "../../../assets/shop2.jpg";
import shop3 from "../../../assets/shop3.jpg";
import shop4 from "../../../assets/shop4.jpg";
import { BtnAddCart, BtnLessMore, BtnLike, H3Product, InputLessMore } from "./styles";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { FaFacebookF, FaPinterest, FaTwitter, FaGooglePlusG, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import ShopCard from "../ShopCard";
import ProductShopDetail from "./ProductsShopDetail";
import ProductInfo from "./ProductInfo"
import ProductDescription from "./ProductDescription"
import ProductDetails from "./ProductDetails"
import { useCallback, useState } from "react";

const ShopDetail = () => {
    const [selectedImage, setSelectedImage] = useState(shop1);
    const [productQuantity, setProductQuantity] = useState(1);
    const handleInputChange = useCallback((value) => {
        const quantity = value < 0 ? 0 : value;
        setProductQuantity(quantity);
    }, []);

    return (
        <>
            <Header className="bg-white pb-5 pt-3"/>
            <BannerMain>
                <div className="d-flex justify-content-center pt-5 pb-5">
                    <h2 className="text-white pb-5 pt-5">Shop Detail</h2>
                </div>
            </BannerMain>
            <main className="bg-white">
                <Container>
                    <div className="d-flex flex-column flex-lg-row pt-5 pb-5">
                        <div className="col-lg-6 pt-3">
                            <img className="img-fluid col-12" src={selectedImage} alt="salad" />
                            <div className="row pt-3">
                                <ProductShopDetail
                                    onClick={() => setSelectedImage(shop1)}
                                    image={shop1}
                                    alt="salad"
                                />
                                <ProductShopDetail
                                    onClick={() => setSelectedImage(shop2)}
                                    image={shop2}
                                    alt="onion"
                                />
                                <ProductShopDetail
                                    onClick={() => setSelectedImage(shop3)}
                                    image={shop3}
                                    alt="bean" 
                                /> 
                            </div>
                        </div>
                        <div className="pt-3 ms-md-5">
                            <div>
                                <h2>Salad</h2>
                                <p>$2.00</p>
                                <hr />
                            </div>
                            <div className="pb-5 pt-3">
                                <p>
                                    Duis vestibulum ante velit. Pellentesque orci felis, pharetra ut pharetra ut, 
                                    interdum at mauris. Aenean efficitur aliquet libero sit amet scelerisque. 
                                    Suspendisse efficitur mollis eleifend. Aliquam tortor nibh, venenatis quis sem dapibus, 
                                    varius egestas lorem a sollicitudin.
                                </p>
                            </div>
                            <div className="d-flex flex-column flex-xl-row justify-content-between align-items-center pt-3 pb-5">
                                <div className="d-flex pb-5">
                                    <BtnLessMore disabled={productQuantity === 0} onClick={() => handleInputChange(productQuantity - 1)}>-</BtnLessMore>
                                    <InputLessMore type="number" onChange={(e) => handleInputChange(e.nativeEvent.target.value)} value={productQuantity}/>
                                    <BtnLessMore onClick={() => handleInputChange(productQuantity + 1)}>+</BtnLessMore>
                                </div>
                                <div className="pb-5">
                                    <BtnAddCart>ADD TO CART</BtnAddCart>
                                </div>
                                <div className="pb-5">
                                    <BtnLike><BsFillSuitHeartFill /></BtnLike>
                                </div> 
                            </div> 
                            <hr />
                            <div className="pt-3 pb-5">
                                <ProductInfo
                                    description="Categories"
                                    text="Food"
                                />
                                <ProductInfo
                                    description="Tags"
                                    text="Natural, Organic, Health, Green, Vegetable"
                                />
                                <ProductInfo
                                    description="ID"
                                    text="A203"
                                />
                                <nav>
                                    <Link to="" className="facebook"><FaFacebookF/></Link>
                                    <Link to="" className="pinterest"><FaPinterest/></Link>
                                    <Link to="" className="twitter"><FaTwitter/></Link>
                                    <Link to="" className="google-plus"><FaGooglePlusG/></Link>
                                    <Link to="" className="instagram"><FaInstagram/></Link>
                                </nav>
                            </div>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div className="d-lg-flex pt-3 pb-5">
                        <div className="col-lg-6">
                            <H3Product>Description</H3Product>
                            <ul>
                                <ProductDescription
                                    text="Using energy and natural resources responsibly"
                                />
                                <ProductDescription
                                    text="Maintaining biodiversity"
                                />
                                <ProductDescription
                                    text="Respecting regional environmental balances"
                                />
                                <ProductDescription
                                    text="Enhancing soil fertility"
                                />
                                <ProductDescription
                                    text="Promoting animal health and welfare"
                                />
                                <ProductDescription
                                    text="Preserving water quality"
                                />
                                <ProductDescription
                                    text="Catering for animals' specific needs"
                                />
                            </ul>
                        </div>
                        <div className="col-lg-6 pt-4">
                            <ProductDetails
                                text="Description"
                            />
                            <ProductDetails
                                text="Additional Information"
                            />
                            <ProductDetails
                                text="Review (2)"
                            />
                        </div>
                    </div>
                </Container>
                <Container>
                    <div className="pt-5 pb-5">
                        <Section title="Related Products">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-5 pt-5 pb-5">
                                <ShopCard
                                    image={shop1} 
                                    alt="Salad" 
                                    product="Salad" 
                                    price={3.20}
                                />
                                <ShopCard
                                    image={shop2} 
                                    alt="Onion" 
                                    product="Onion"
                                    price={3.20}
                                />
                                <ShopCard
                                    image={shop3} 
                                    alt="Bean" 
                                    product="Bean" 
                                    price={3.50}
                                />
                                <ShopCard
                                    image={shop4} 
                                    alt="Lemon" 
                                    product="Lemon" 
                                    price={1.08}
                                />
                            </div>
                        </Section>
                    </div>
                </Container>
            </main>
            <Footer />
        </>
    );
}

export default ShopDetail;