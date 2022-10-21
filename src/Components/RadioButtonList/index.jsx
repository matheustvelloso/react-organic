import { useState } from "react";
import RadioButton from "../RadioButton";

const RadioButtonList = ({radioButtons, name}) => {
    const [selectedRadio, setSelectedRadio] = useState(radioButtons[0]?.id);

    return(
        <>
            {radioButtons.map(({id, value, label, message}, i) => (
                <RadioButton
                    defaultChecked={i === 0}
                    onChange={() => setSelectedRadio(id)}
                    key={id}
                    id={id}
                    value={value}
                    name={name}
                    label={label}
                    message={message}
                    selectedRadio={selectedRadio}
                />  
            ))}
        </>
    );
}

export default RadioButtonList;