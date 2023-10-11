import "./Footer.css"

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerIzq">
                <p>Dirección: 25 de Mayo 233</p>
                <p>Teléfono: 782-3333</p>
                <p>mail: ventas@techcba.com.ar</p>
                <p>Horario de atención: Lunes a Viernes de 8 a 18hs</p>
            </div>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.9427647576053!2d-64.18308862381153!3d-31.415702974261993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a29c8ae715c3%3A0x5d18942a67977368!2s25%20de%20Mayo%20233%2C%20X5019%20EHE%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1697050918582!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            <div className="footerCentro">
                <button className="button">Notebooks</button>
                <button className="button">PCs de Escritorio</button>
                <button className="button">Impresoras</button>
                <button className="button">Placas de Video</button>
                <button className="button">Monitores</button>
                <button className="button">Almacenamiento</button>
            </div>
            <div className="footerDer">
                <div className="alineoFooterDer">
                    <img className="imgFooter" src={require('./imgFooter/logoFacebook.png')} alt="Facebook TechCBA" />
                    <p className="alinearFooter">Facebook</p>
                </div>
                <div className="alineoFooterDer">
                    <img className="imgFooter" src={require('./imgFooter/logoInstagram.png')} alt="Instagram TechCBA" />
                    <p className="alinearFooter">Instagram</p>
                </div>
                <div className="alineoFooterDer">
                    <img className="imgFooter" src={require('./imgFooter/logoWApp.png')} alt="WhatsApp TechCBA" />
                    <p className="alinearFooter">351 111-2222</p>
                </div>
            </div>
            
        </footer>
    )
}