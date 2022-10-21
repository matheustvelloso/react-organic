import styled from "styled-components"


export const Input = styled.input`
    border: none;
    background-color: #00000000;

    &:focus{
        outline: none;
    }
`
export const DivInput = styled.div`
    border: 2px solid #ccc;
    border-radius: 28px;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    transition: 500ms;

    &:hover{
        border: 2px solid #97ae76;
    }
`
export const Title = styled.h4`
    font-family: inherit;
    font-weight: 400;
    font-size: 18px;
    color: #333;
`
export const Paragraph = styled.p`
    color: #666;
`
export const DivFooter = styled.div`
    background-color: #222;
    color: #666;
    display: flex;
    justify-content: space-between;
    padding-top: 30px;
    padding-bottom: 20px;
    margin-top: 36px;
`
export const DivBannerFooter = styled.div`
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
`