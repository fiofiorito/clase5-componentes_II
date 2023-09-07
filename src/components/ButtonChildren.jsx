function ButtonChildren({ textName, saludacion }) {
    return <button onClick={saludacion}>{textName}</button>
}

export default ButtonChildren;