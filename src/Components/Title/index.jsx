import { TitleContainer, TitleHeading } from "./styles";

const Title = ({title, bgImage}) => {
    return (
        <TitleContainer bgImage={bgImage}>
            <div className="d-flex justify-content-center pt-5 pb-5">
                <TitleHeading className="text-white pb-5 pt-5">{title}</TitleHeading>
            </div>
        </TitleContainer>
    );
}

export default Title;