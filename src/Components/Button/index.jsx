import { StyledLink } from "./styles";

const Button = ({text, className = '', Icon}) => (
    <StyledLink to="/" className={`btn btn-view align-self-center ${className}`}>{Icon && <Icon />}{text}</StyledLink>
);

export default Button;