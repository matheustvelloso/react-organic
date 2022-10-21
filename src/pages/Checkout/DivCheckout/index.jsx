import { BsCheck } from "react-icons/bs"
import { Link } from "react-router-dom";
import { DivCheckoutText } from "../styles";

const DivCheckout = ({text, link}) => (
    <DivCheckoutText>
        <BsCheck className="me-3 mt-1 fs-icon"/>
        <p>{`${text}?`}</p>
        <Link to="/carrinho" className="text-green ms-1">{link}</Link>
    </DivCheckoutText>
);

export default DivCheckout;