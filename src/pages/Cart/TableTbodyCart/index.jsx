import { BtnRemove, InputCart } from "./styles";
import { IoIosClose } from "react-icons/io"

const TableTbodyCart = ({image, alt, product, weight, price, total}) => (
    <tr>
        <td valign="middle">
            <img className=" img-fluid border" src={image} alt={alt} />
        </td>
        <td valign="middle">{product}</td>
        <td valign="middle">{weight}</td>
        <td valign="middle"><InputCart type="number" placeholder="1" min={1}/></td>
        <td valign="middle">{`$${price}`}</td>
        <td valign="middle">{`$${total}`}</td>
        <td valign="middle" className="text-end"><BtnRemove><IoIosClose/></BtnRemove></td>
    </tr>

);

export default TableTbodyCart;