import { Line, SectionTitle } from "./styles";

const BannerPages = ({title, imageBg}) => (
    <div className={imageBg}>
        <div className="d-flex justify-content-center pt-5 pb-5">
            <SectionTitle className="text-white pb-5 pt-5">{title}</SectionTitle>
        </div>
        <Line />
    </div>
);

export default BannerPages;