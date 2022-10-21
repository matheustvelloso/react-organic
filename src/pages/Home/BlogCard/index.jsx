import { useMemo } from "react";
import { TbMessageCircle2 } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Title } from "./styles";


const BlogCard = ({isReversed, image, title, date, comments, description}) => {
    const parsedDate = useMemo(
        () => new Date(date).toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric'}),
        [date]
    );
    
    return(
        <div className="col d-flex flex-column">
            <img className={`img-fluid ${isReversed ? 'order-lg-2' : ''}`} src={image} alt="" />
            <div className="flex-1 bg-grey p-5"> 
                <Title><Link to="/" className="text-grey">{title}</Link></Title>
                <div className="d-flex justify-content-between date">
                    <p>{parsedDate}</p>
                    <p> {comments} <TbMessageCircle2/></p>
                </div>
                <p className="text-grey">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default BlogCard;