import styled from "styled-components";

export const Select = styled.select`
    border: none;
    background-color: #00000000;

    &:focus{
        outline: none;
    }
`;
export const DivShop = styled.div`
    background-color: #d2ffea;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h2`
    position: relative;

    &::after{
        content: "";
        position: absolute;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        height: 3px;
        display: inline-block;
        border-top: 1px solid #fff;
        border-bottom: 1px solid #fff;
    }
`;