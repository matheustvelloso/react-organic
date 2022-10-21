import styled from "styled-components"
import bannerMain from "../../assets/bannerMain.jpg"

export const DivBannerMain = styled.div`
    background: rgba(0, 0, 0, 0.4);
    background-image: url(${bannerMain});
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: darken;
`