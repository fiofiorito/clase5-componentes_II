import ButtonChildren from "./ButtonChildren";

function PresentationCard({ name, age, details, hobbies, saludar }) {
    return <div>
        {/* aca creamos una card q contiene informacion q se va a pasar
    en forma de props, incluye valores primitivos y
    valores relativos que se pueden pasar */}
        <h2>Nombre: {name}</h2>
        <p>Edad: {age}</p>
        <p>Profesion: {details.profession}</p>
        {/* el index dentro de map() se pasa solo y se puede
        usar para la key ==> NO ES RECOMENDADO PORQUE IMPLICA UN GASTO DE EFICIENCIA,
        SE PUEDE USAR HOBBIES DIRECTO */}
        <ul>{hobbies.map((hobby, index) => {
            return <li key={index}>{hobby}</li>
        })}</ul>

        <ButtonChildren saludacion={saludar} textName={`Saludar a ${name}`} />
        {/* <button onClick={saludar}>saludar</button> */}
    </div>
}

export default PresentationCard;