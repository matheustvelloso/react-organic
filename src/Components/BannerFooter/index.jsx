import { BtnContainer, Container } from "./styles";
import bannerFooter1 from "../../assets/bannerFooter1.jpg"
import bannerFooter2 from "../../assets/bannerFooter2.jpg"
import bannerFooter3 from "../../assets/bannerFooter3.jpg"
import bannerFooter4 from "../../assets/bannerFooter4.jpg"
import Button from "../Button";
import { AiOutlineInstagram } from "react-icons/ai"

const images = [
    bannerFooter1,
    bannerFooter2,
    bannerFooter3,
    bannerFooter4    
]

const BannerFooter = () => {
    return(
        <Container>
            {images.map((image, i) => (
                <img key={i} src={image} alt="" />
            ))}
            <BtnContainer className="d-flex justify-content-center">
                <Button Icon={AiOutlineInstagram} text="FOLLOW US" />
            </BtnContainer>
        </Container>
    );
}  

export default BannerFooter;