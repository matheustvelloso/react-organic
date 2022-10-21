import { Link } from "react-router-dom";

const ProductsCard = ({image, alt, product, price}) => (
    <div className="col mb-4">
        <div className="border p-4">
            <figure>
                <Link to="/produtos/produto">
                    <img className="img-fluid" src={image} alt={alt} />
                </Link>
                <figcaption className="text-start">
                    <h3>{product}</h3>
                    <span>{`$${price.toFixed(2)}`}</span>
                </figcaption>
            </figure>
        </div>
    </div>
);

export default ProductsCard;