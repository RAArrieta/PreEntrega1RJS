import "./Header.css"

export const Header = () => {
    return (
        <header className="encabezado">
            <img className="logo" src={require('./imgHeader/LogoTechCBA.png')} alt="Tech CBA logo" />
            <input className="buscador" type="text" placeholder="Buscar..."/>
            <img className="carrito" src={require('./imgHeader/carrito.png')} alt="Carrito" />0
        </header>
    )
}