import BannerMain from '../../Components/BannerMain';
import Container from "../../Components/Container";
import Categories from './Categories';
import Header from "../../Components/Header";
import bannerHeader from "../../assets/bannerHeader.jpg";
import { BannerText, BannerTitle } from './styles';
import ProductsCard from './ProductsCard';
import Button from '../../Components/Button';
import Footer from '../../Components/Footer';
import BannerFooter from '../../Components/BannerFooter';
import BlogCard from './BlogCard';
import Section from '../../Components/Section';
import { blogCards, categories, productCards } from './data';
import useTitle from '../../hooks/useTitle'
import { useEffect } from 'react';


const Home = () => {
    const setTitle = useTitle()

    useEffect(() => {
        setTitle();
      }, [setTitle]);
    return (
        <>
            <Header className="pt-3 pb-5"/>
            <div className="d-flex justify-content-center overflow-hidden">
                <img className="h-100" src={bannerHeader} alt="banner" />
            </div>
            <main className="bg-white pt-5 d-flex flex-column">
                <Container>
                    <div className="d-flex flex-wrap justify-content-center pt-4 pb-5">
                        {categories.map(({id, image, caption}) => (
                            <Categories
                                key={id}
                                image={image}
                                caption={caption}
                            />
                        ))}
                    </div>
                    <hr />
                </Container>
                <Section title="Our Products">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 text-center pt-5 mb-5 pb-5">
                        {productCards.map(({id, image, price, product}) => (
                            <ProductsCard 
                                key={id}
                                image={image}
                                alt={product}
                                product={product}
                                price={price}
                            /> 
                        ))}
                    </div>
                </Section>
                <BannerMain>
                    <Container>
                        <div className="d-flex flex-column justify-content-center text-center py-5">
                            <BannerText>Organic Food</BannerText>
                            <BannerTitle>Healthy - Fresh - Delicious</BannerTitle>
                            <Button text="VIEW MORE" className="mt-5"/>
                        </div>
                    </Container>
                </BannerMain>
                <Section title="The Blog">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 pb-5 pt-5 mb-5">               
                        {blogCards.map(({id,image,title, date, comments, description}, i) => (                       
                            <BlogCard
                                key={id}
                                isReversed={i % 2 !== 0}
                                image={image}
                                title={title}
                                date={date}
                                comments={comments}
                                description={description}
                            />
                        ))}
                    </div>
                </Section>
            </main>
            <BannerFooter/>
            <Footer />
        </>
    );
}

export default Home;