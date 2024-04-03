import NavbarComponent from "../navbar/NavbarComponent"

const HeaderComponent = () => {
    return (
        <header className='header'>
            <NavbarComponent />
            <div className="banner">
                <img src="../../public/fondo-carreteaa.jpg" alt="img-banner" className="banner-img" />
                <div className="banner-fondo"></div>
                <div className="banner-content">
                    <div className="banner-title">SENA dev&apos;s </div>
                    <p className="banner-descripcion">Portafolio de habilidades de desarrollares del sitio HelmetIf, desde
                        datos personales hasta profesionales. &nbsp;
                        Acompañame a conocer más sobre el talento humano que llevo desarrollar el sitio de HelmetIf.
                    </p>
                </div>
            </div>
        </header>
    )
}

export default HeaderComponent
