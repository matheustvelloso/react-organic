import { Container } from "./styles";

const RadioButton = ({onChange, id, value,label, message, name, selectedRadio, defaultChecked }) => {
    return (
        <Container className="py-3">
            <input 
                onChange={onChange} 
                className="me-3" 
                type="radio" 
                id={id} 
                value={value} 
                name={name} 
                defaultChecked={defaultChecked} 
            />
            <label htmlFor="checkPayments">{label}</label>
            {selectedRadio === id && message}
        </Container>
    );
}

export default RadioButton;