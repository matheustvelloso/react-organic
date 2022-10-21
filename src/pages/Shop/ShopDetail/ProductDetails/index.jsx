import { RiArrowDownSLine } from "react-icons/ri";
import { H3Product, Hr } from "../styles";

const ProductDetails = ({text}) => (
    <>
        <div className="d-flex justify-content-between">
            <H3Product>{text}</H3Product>
            <span><RiArrowDownSLine /></span>
        </div>
        <Hr />
    </>
);

export default ProductDetails;