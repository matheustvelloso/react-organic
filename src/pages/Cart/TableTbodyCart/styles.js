import styled from "styled-components"

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