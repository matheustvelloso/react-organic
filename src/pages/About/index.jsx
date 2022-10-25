import BannerMain from "../../Components/BannerMain";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import about1 from "../../assets/about1.jpg"
import about2 from "../../assets/about2.jpg"
import Leader from "../../assets/Leader.jpg"
import Farmer from "../../assets/Farmer.jpg"
import Farmer2 from "../../assets/Farmer2.jpg"
import Container from "../../Components/Container";
import AboutContent from "./AboutContent";
import { DivBannerAbout } from "./styles";
import AboutBannerContent from "./AboutBannerContent";
import AboutCollaborators from "./AboutCollaborators";
import Section from "../../Components/Section";
import useTitle from "../../hooks/useTitle";
import { useEffect } from "react";

const About = () => {
    const setTitle = useTitle()
    
    useEffect(() => {
        setTitle('About');
    }, [setTitle]);
    
    return (
        <>
            <Header className="bg-white pb-5 pt-3"/>
            <BannerMain>
                <div className="d-flex justify-content-center pt-5 pb-5">
                    <h2 className="text-white pb-5 pt-5">About Us</h2>
                </div>
            </BannerMain>
            <main className="bg-white">
                <Container>
                    <div className="pt-5 pb-5">
                        <div className="d-block d-lg-flex text-center"> 
                            <AboutContent
                                image={about1}
                                title="Who We Are"
                            >
                            <p className="text-grey">We are a manufacturing base of organic food produced on our farm. We are a family health 
                                care production team, created by today's need for clean and safe food, driven by the desire 
                                to build meaningful and meaningful experiences. Vivamus et enim accumsan, tempus dui non, 
                                pretium libero. Vivamus vitae justo non metus malesuada finibus. Pellentesque vehicula 
                                porttitor eleifend. Proin eget velit in arcu consectetur tempor. Sed pulvinar, 
                                purus sed efficitur elementum, risus risus tincidunt massa, a iaculis risus turpis id 
                                sapien. Pellentesque a metus urna. Integer placerat et ante quis pharetra. Nulla facilisi. 
                                Donec egestas tortor non ante pulvinar, sit amet sollicitudin nisl auctor. Vestibulum 
                                aliquet finibus consectetur. Nullam faucibus vehicula est nec pulvinar.
                                </p>
                            </AboutContent>
                        </div>
                        <div className="d-block d-lg-flex text-center">
                            <AboutContent
                                alignRight
                                image={about2}
                                title="What We Do"
                            >
                                <p>
                                We provide all kinds of organic products. Produced on our farm, the products are always 
                                fresh, multi-vitamins, rich variety for your family. With our organic food will bring 
                                delicious meals to your family.
                                </p>
                                <p>
                                Vestibulum eu nisl vitae tortor feugiat aliquet finibus in libero. Vivamus et enim 
                                accumsan, tempus dui non, pretium libero. Vivamus vitae justo non metus malesuada 
                                finibus. Pellentesque vehicula porttitor eleifend. Proin eget velit in arcu consectetur 
                                tempor. Sed pulvinar, purus sed efficitur elementum, risus risus tincidunt massa, a iaculis 
                                risus turpis id sapien diam pellentesque ullamcorper.
                                </p>
                            </AboutContent>
                        </div>
                    </div>
                </Container>
                <DivBannerAbout>
                    <Container>
                        <div className="d-block d-md-flex text-white text-center justify-content-evenly pt-5 pb-5">
                            <AboutBannerContent
                                num="154"
                                title="HAPPY CLIENT"
                            />
                            <hr />
                            <AboutBannerContent
                                num="234"
                                title="PRODUCTS IN STORE"
                            />
                            <hr />
                            <AboutBannerContent
                                num="32"
                                title="YEAR OF EXPERIENCE"
                            />
                            <hr />
                            <AboutBannerContent
                                num="126"
                                title="RUNING PROJECTS"
                            />
                        </div>
                    </Container>
                </DivBannerAbout>
                <Container>
                    <Section title="Our Team">
                        <div className="row d-block d-sm-flex justify-content-center pb-5 text-center">
                            <AboutCollaborators
                                image={Leader}
                                name="Billy Ray"
                                position="Leader"
                            />
                            <AboutCollaborators
                                image={Farmer}
                                name="Danielle Reed"
                                position="Farmer"
                            />
                            <AboutCollaborators
                                image={Farmer2}
                                name="Peter Castro"
                                position="Farmer"
                            />
                        </div>
                    </Section>
                </Container>
            </main>
            <Footer/>
        </>
)};

export default About;