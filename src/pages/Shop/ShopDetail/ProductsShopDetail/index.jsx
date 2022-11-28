import { ImageContainer } from "./styles";

const ProductShopDetail = ({onClick, image, alt}) => (
    <div className="col">
        <ImageContainer onClick={onClick} className="img-fluid border" src={image} alt={alt} />
    </div>
);

export default ProductShopDetail;