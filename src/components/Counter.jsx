import { useEffect, useState } from "react"

function Counter() {
    const [count, setCount] = useState(0);
    console.log("montar");

    // el useEffect SIN [] dep quiere decir q 
    // la accion q esta adentro, se va a 
    // sincronizar todas las veces con el backend 
    // cada vez q se de un cambio en el estado
    useEffect(() => {
        console.log("use effect sin [] -> dep")
    })

    // este caso sirve para cuando queremos que el
    // codigo dentro de useEffect se ejecute SOLO UNA
    // VEZ con el primer montado, solo se ejecuta con el primer cambio de estado
    // solo se sincroniza con el backend en el 1er montaje
    useEffect(() => {
        console.log("use effect con [] -> dep")
    }, []);

    // en este caso, la dependencia esta atenta a los
    // cambios del valor q se encuentra dentro
    // del array
    // se sincroniza con el backend cuando se genera
    // un cambio de estado de la dependencia a la q esta atento
    useEffect(() => {
        console.log("use effect con [tiene dep adentro]");
    }, [count]);

    return <div>
        <button onClick={() => { setCount(count + 1) }}>+1</button>
        <p>{count}</p>
        <button onClick={() => { setCount(count - 1) }}>-1</button>
    </div>
}

export default Counter;