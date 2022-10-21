import bannerMain from "../../assets/bannerMain.jpg";
import Container from "../../Components/Container";
import Header from "../../Components/Header";
import { Select } from "./styles";
import Footer from "../../Components/Footer";
import ShopCard from "./ShopCard";
import { ShopCardInfo } from "./data";
import Title from "../../Components/Title";

const Shop = () => (
    <>
        <Header className="bg-white pb-5 pt-3"/>
        <Title 
            title="Shop"
            bgImage={bannerMain}
        />
        <main className="bg-white">
            <Container>
                <div className="d-sm-flex justify-content-between pt-5">
                    <p className="mt-2">Showing 1 - 12 of 30 results</p>
                    <Select name="sort">
                        <option value="Default sorting">Default sorting</option>
                        <option value="Sort by popularity">Sort by popularity</option>
                        <option value="Sort by average rating">Sort by average rating</option>
                        <option value="Sort by newness">Sort by newness</option>
                        <option value="Sort by price: low to high">Sort by price: low to high</option>
                        <option value="Sort by price: high to low">Sort by price: high to low</option>
                    </Select>
                </div>
            </Container>
            <hr />
            <Container>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 pt-5 pb-5">
                    {ShopCardInfo.map(({id,image,product,price}) => (
                        <ShopCard
                            key={id}
                            image={image} 
                            alt={product} 
                            product={product}
                            price={price}
                        />                            
                    ))}
                </div>
            </Container>
        </main>
        <Footer/>
    </>
);

export default Shop;