import { Image } from "./styles";

const AboutCollaborators = ({image, name, position}) => (
    <div className="col-sm-3">
        <Image className="img-fluid pt-3 pb-3" src={image} alt={name} />
        <h4>{name}</h4>
        <span>{position}</span>
    </div> 
);

export default AboutCollaborators;