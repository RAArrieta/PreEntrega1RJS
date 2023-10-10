import "./Footer.css"

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerIzq">
                <button className="button">Notebooks</button>
                <button className="button">PCs de Escritorio</button>
                <button className="button">Impresoras</button>
                <button className="button">Placas de Video</button>
                <button className="button">Monitores</button>
                <button className="button">Almacenamiento</button>
            </div>
            <div className="footerCentro">
                <div className="alineoFooterCenter">
                    <img className="imgFooter" src={require('./imgFooter/logoFacebook.png')} alt="Facebook TechCBA" />
                    <p>Facebook</p>
                </div>
                <div className="alineoFooterCenter">
                    <img className="imgFooter" src={require('./imgFooter/logoInstagram.png')} alt="Instagram TechCBA" />
                    <p>Instagram</p>
                </div>
            </div>
            <div className="footerDer">
                <p>Dirección: 25 de Mayo 233</p>
                <p>WhatsApp +54 351 240-0949</p>
                <p>Teléfono: 782-3333</p>
                <p>mail: ventas@techcba.com.ar</p>
                <p>Horario de atención: Lunes a Viernes de 8 a 18hs</p>
            </div>
        </footer>
    )
}