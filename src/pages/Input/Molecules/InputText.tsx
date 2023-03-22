import { useState } from "react";
import "../Styles/InputText.css"

export const InputText = () => {
    const [value, setValue] = useState<string>();
    const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    return (
        <div className="InputExample">
            <div className="InputExample__Title">
                {`<input type="text"/>`}
            </div>
            <input type="text" placeholder={"Пример текста"}value={value} onChange={handleValueChange} className="InputText InputText__Text"/>
        </div>
    )
}
