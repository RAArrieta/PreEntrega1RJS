import "./Header.css"

export const Header = () => {
    return (
        <header className="encabezado">
            <img className="logo" src={require('./imgHeader/LogoTechCBA.png')} alt="Tech CBA logo" />
        </header>
    )
}