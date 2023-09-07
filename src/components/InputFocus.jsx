import { useRef } from "react";
import ButtonChildren from "./ButtonChildren";

function InputFocus() {
    // definimos null el useRef
    const inputRef = useRef(null);
    // esta funcion toma la ref y la utiliza para manipular el
    // input dentro del DOM (como document.getElementByID)
    // al clickear el boton podemos manipular el input y darle su
    // propiedad de focus, q normalmente se prende al hacer click en
    // el input en vez de un boton.
    const handleClick = () => {
        inputRef.current.focus();
    }

    return <div>
        <input ref={inputRef} type="text" />
        <ButtonChildren saludacion={handleClick} textName={"Click me"} />
    </div>
}

export default InputFocus;