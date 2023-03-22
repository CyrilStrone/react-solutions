import { InputText } from "../Molecules/InputText"
import "../Styles/Input.css"

export const Input = () => {
 
    return (
        <div className="Input">
            <InputText/>
            <input type="email " />
            <input type="tel " />
            <input type="url " />
            <input type="password" />
            <input type="number " />
            <input type="search " />
            <input type="datetime-local" />
            <input type="date " />
            <input type="month " />
            <input type="week " />
            <input type="time " />
            <input type="range" />
            <input type="radio" />
            <input type="checkbox" />
            <input type="color " />
            <input type="file" />
            <input type="image" />
            <input type="submit" />
            <input type="reset" />
            <input type="button" />
            <input type="image" />
            <input type="hidden" />
        </div>
    )
}
