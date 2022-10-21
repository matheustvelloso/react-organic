import styled from "styled-components";

export const BtnLessMore = styled.button`
    border: 1px solid #97ae76;
    background-color: #00000000;
    color: #333;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 11px;
    padding-bottom: 11px;
    font-weight: 700;
    transition: 500ms;

    &:hover{
        background-color: #97ae76 ;
    }
`

export const InputLessMore = styled.input`
    border: 1px solid #97ae76;
    max-width:70px;
    text-align: center;

    &:focus{
        outline: none;
    }
`

export const BtnAddCart = styled.button`
    border: none;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 14px;
    padding-bottom: 14px;
    color: #fff;
    background-color: #97ae76;
`
export const BtnLike = styled.button`
    border: 2px solid #97ae76;
    background-color: #00000000;
    padding-left: 36px;
    padding-right: 36px;
    padding-top: 11px;
    padding-bottom: 11px;
    font-size: 18px;
    color: #97ae76;
    transition: 500ms;

    &:hover{
        background-color: #97ae76;
        color: #fff;
    }

`

export const SpanProduct = styled.span`
    color: #97ae76;
`

export const H3Product = styled.h3`
    font-size: 18px;
    font-family: roboto,sans-serif;
    font-weight: 400;
    padding-bottom: 15px;
    margin-bottom: 0;
    margin-left:  36px;
`  
export const Hr = styled.hr`
    max-width: 800px;
    margin-left: 34px;
`
export const SectionTitle = styled.h3`
    font-size: 32px;
    font-weight: 400;
`;  