import { ImageContainer } from "./styles";

const ProductShopDetail = ({onClick, image, alt}) => (
    <ImageContainer className="col-4">
        <img onClick={onClick} className="img-fluid border" src={image} alt={alt} />
    </ImageContainer>
);

export default ProductShopDetail;