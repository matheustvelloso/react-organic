import { Link } from "react-router-dom";
import { CardShop } from "../styles";

const ShopCard = ({image, alt, product,price}) => (
    <div className="col text-center d-flex">
        <CardShop>
            <div className="border">
                <Link to="/shop/shop-detail"><img className="img-fluid" src={image} alt={alt} /></Link>
            </div>
            <div className="p-4">
                <Link to="/shop/shop-detail" className="text-grey"><h3>{product}</h3></Link>
                <span className="price">{`$${price.toFixed(2)}`}</span>
            </div>
        </CardShop>
    </div>
);

export default ShopCard;