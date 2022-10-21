import Container from "../Container";
import { Line, SectionTitle } from "./styles";

const Section = ({title, children}) => {
    return(
        <Container>
            <div className="text-center pt-5">
                <SectionTitle>{title}</SectionTitle>
            </div>
            <Line />
            {children}
        </Container>
    );
}

export default Section;