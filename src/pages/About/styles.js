import styled from "styled-components";
import aboutBanner from "../../assets/aboutBanner.jpg"

export const DivBannerAbout = styled.div`
    background: rgba(0, 0, 0, 0.7);
    background-image: url(${aboutBanner});
    background-blend-mode: darken;
    overflow: hidden;
`
export const P = styled.p`
    font-weight: 700;
    font-size: 48px;
`
export const Span = styled.span`
    font-size: 23px;
    font-weight: 400;
`
export const SectionTitle = styled.h3`
    font-size: 32px;
    font-weight: 400;
`;