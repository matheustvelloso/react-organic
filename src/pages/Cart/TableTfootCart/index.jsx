import { BtnCoupon, BtnUpdateCart, InputCoupon } from "./styles";

const TableTfootCart = () => (
    <>
        <tr>
            <td />
            <td />
            <td />
            <td />
            <td>
                <InputCoupon placeholder="Coupon code"/>
            </td>
            <td>
                <BtnCoupon>APPLY COUPON</BtnCoupon>
            </td>
            <td>
                <BtnUpdateCart>UPDATE CART</BtnUpdateCart>
            </td>
        </tr> 
    </>          
);

export default TableTfootCart;