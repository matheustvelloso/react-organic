const TableTbodyCartMobile = ({type, text}) => (
    <tr>
        <td className="col-6">{type}</td>
        <td className="col-6 text-end">{text}</td>
    </tr>
);

export default TableTbodyCartMobile;