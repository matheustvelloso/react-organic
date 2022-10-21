import { Image, SectionTitle } from "./styles";

const AboutContent = ({alignRight, image, title, children }) => (
    <>
        <div className={`w-100 w-lg-50 overflow-hidden ${alignRight ? "order-lg-2" : "" }`}>
            <div className="d-flex h-100 justify-content-center align-items-center flex-1">
                <Image className=""  src={image} alt={title} />
            </div>
        </div>       
        <div className={`w-100 w-lg-50 p-5 ${alignRight ? "text-lg-end" : "text-lg-start"}`}>
            <SectionTitle>{title}</SectionTitle>
            <hr />
            {children}
        </div>
    </>

);
export default AboutContent;