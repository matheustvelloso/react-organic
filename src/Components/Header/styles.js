import styled, { keyframes } from "styled-components";
const fadeIn = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`
const fadeOut = keyframes`
    from{
        opacity: 1;
    }
    to{
        opacity: 0;
    }
`
const enter = keyframes`
    from{
        right: -160px;
    }
    to{
        right: 0;
    }
`
const leave = keyframes`
    from{
        right: 0;
    }
    to{
        right: -160px;
    }
`     

export const Nav = styled.nav`
    & > a{
        color: #666;
        font-size: 16px;
        font-weight: 700;
    }
    a:hover{
       color: #97ae76;
    }
`
export const Select = styled.select`
    &:focus{
        outline: none;
    }
`
export const MenuMobile = styled.div`
    height: 100vh;
    right: ${props => props.isMenuOpened ? 0 : -160}px;
    padding: 30px;
    width: 160px;
    animation: ${props => props.isMenuOpened ? enter : leave} 0.2s ease-out;
    transition: all 0.2s ease-out;
`
export const MenuOverlay = styled.div`
    opacity: ${props => props.isMenuOpened ? 1 : 0};
    visibility: ${props => props.isMenuOpened ? "visible" : "hidden"};
    animation: ${props => props.isMenuOpened ? fadeIn : fadeOut} 0.2s ease-out;
    background-color: rgba(0,0,0,0.5);
    transition: all 0.2s ease-out;
`