import { BtnCoupon, BtnUpdateCart, InputCoupon } from "./styles";

const TableTfootCartMobile = () => (
    <>
        <tr>
            <td><InputCoupon placeholder="Coupon Code"/></td>
        </tr>
        <tr>
            <td><BtnCoupon>APPLY COUPON</BtnCoupon></td>
        </tr>
        <tr>
            <td><BtnUpdateCart>UPDATE CART</BtnUpdateCart></td>
        </tr>
    </>
    
);

export default TableTfootCartMobile;