import { Link } from "react-router-dom";
import { DivShop } from "../styles";

const ShopCard = ({image, alt, product,price}) => (
    <div className="col text-center">
        <div className="border">
            <Link to="/produtos/produto"><img className="img-fluid" src={image} alt={alt} /></Link>
        </div>
        <DivShop className="p-4">
            <Link to="/produtos/produto" className="text-grey"><h3>{product}</h3></Link>
            <span className="price">{`$${price.toFixed(2)}`}</span>
        </DivShop>
    </div>
);

export default ShopCard;