import styled from "styled-components"

export const TitleContainer = styled.div`
    background: rgba(0, 0, 0, 0.4);
    background-image: url(${({bgImage}) => bgImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: darken;
`;
export const TitleHeading = styled.h2`
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