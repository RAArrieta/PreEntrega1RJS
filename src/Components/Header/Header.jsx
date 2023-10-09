import "./Header.css"

export const Header = () => {
    return (
        <header className="encabezado">
            <img src={require('./imgHeader/Logo.png')} alt="Tech CBA logo" />
        </header>
    )
}