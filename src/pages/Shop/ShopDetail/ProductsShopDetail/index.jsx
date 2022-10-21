const ProductShopDetail = ({onClick, image, alt}) => (
    <div className="col-4">
        <img onClick={onClick} className="img-fluid border" src={image} alt={alt} />
    </div>
);

export default ProductShopDetail;