import { SpanProduct } from "../styles";

const ProductInfo = ({description, text}) => (
    <p>
        {`${description}:`} <SpanProduct>{text}</SpanProduct>
    </p>
);

export default ProductInfo;