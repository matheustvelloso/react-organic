import { Link } from 'react-router-dom';
import { Caption, Image } from './styles';

const Categories = ({image, caption}) => (
    <div className="text-center px-3 pb-5">
        <Image className="mb-4" src={image} alt="Product" />
        <Link to="/" ><Caption>{caption}</Caption></Link>
    </div>
);

export default Categories;