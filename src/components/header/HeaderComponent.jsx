import NavbarComponent from "../navbar/NavbarComponent"

const HeaderComponent = () => {
    return (
        <header className='header'>
            <NavbarComponent />
            <div className="banner">
                <img src="/fondo-dev-4.png" alt="img-banner" className="banner-img" />
                <div className="banner-fondo"></div>
                <div className="banner-content">
                    <div className="banner-title">SENA dev&apos;s</div>
                    <p className="banner-descripcion">Desarrolladores del sitio web oficial <b>I E Centenario de Pereira</b></p>
                    <p className="banner-recall">¡ Conocenos !</p>
                </div>
            </div>
        </header>
    )
}

export default HeaderComponent
