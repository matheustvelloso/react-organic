import { P, Span } from "../styles";

const AboutBannerContent = ({num, title}) => (
    <div>
        <P>{num}</P>
        <Span>{title}</Span>
    </div>
);

export default AboutBannerContent;