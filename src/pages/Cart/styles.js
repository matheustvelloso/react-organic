import styled from "styled-components";

export const BtnCheckout = styled.button`
    font-size: 14px;
    padding: 0 37px;
    transition: all .3s ease-in-out;
    line-height: 46px;
    background-color: #97ae76;
    color: #fff;
    border: 2px solid #97ae76;
    border-radius: 25px;

    &:hover{
        background-color: #7e975a;
        border-color: #7e975a;
    } 
`
export const SectionTitle = styled.h3`
    font-size: 32px;
    font-weight: 400;
`;
export const BtnRemove = styled.button`
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #97ae76;
    color: #fff;
    text-align: center;
    line-height: 20px;
    transition: all .3s ease-in-out;
    border: none;

    &:hover{
        background-color: #d9534f;
    }

`
export const InputCart = styled.input`
    width: 98px;
    height: 48px;
    border-radius: 25px;
    border: 1px solid #97ae76;
    text-align: center;

    &:focus{
        outline: none;
    }
`