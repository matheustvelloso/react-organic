import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    
    & > svg{
        margin-right: 8px;   
    }
`