import styled from "styled-components";



export const DivCheckoutText = styled.div`
    display: flex;
    line-height: 28px;
    background-color: #f5f5f5;
    border-top: 2px solid #ccc;
    padding: 10px 15px;
    margin-bottom: 30px;
`

export const BtnPlaceOrder = styled.button`
    min-width: 200px;
    margin-left: 15px;
    background-color: #97ae76;
    color: #fff;
    border: 2px solid #97ae76;
    border-radius: 25px;
    line-height: 46px;

    &:hover{
        background-color: #7e975a;
        border-color: #7e975a;
    }
`
export const SectionTitle = styled.h3`
    font-size: 32px;
    font-weight: 400;
`;
export const PaymentContainer = styled.div`
    background-color: #f5f5f5;
    padding: 16px;
    color: #999999;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;

`

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