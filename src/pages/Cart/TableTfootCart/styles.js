import styled from "styled-components"

export const InputCoupon = styled.input`
        text-align: center;
        border-radius: 25px;
        height: 50px;
        transition: all .3s ease-in-out;
        border: 1px solid #ccc;
        padding: 0 9px;

        &:focus{
            border-color: #66afe9;
            outline: none;
            box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
        }
`

export const BtnCoupon = styled.button`
    width: 160px;
    height: 50px;
    font-size: 14px;
    transition: all .3s ease-in-out;
    background-color: #97ae76;
    color: #fff;
    border: 2px solid #97ae76;
    border-radius: 25px;

    &:hover{
        background-color: #7e975a;
        border-color: #7e975a;
    }
`

export const BtnUpdateCart = styled.button`
        width: 160px;
    height: 50px;
    font-size: 14px;
    transition: all .3s ease-in-out;
    background-color: #fff ;
    color: #97ae76;
    border: 2px solid #97ae76;
    border-radius: 25px;

    &:hover{
        background-color: #7e975a;
        border-color: #7e975a;
        color: #fff;
    }
`