import './style.css'
const NavbarComponent = () => {
    return (
        <>
            <nav className="nav">
                <div className="nav-title">
                    <h1 className="title">Portafolio Dev</h1>
                </div>

                <div className="container-items">
                    <div className='items'><a href="#">devs</a></div>
                    <div className='items'><a href="#formulario-contacto">contacto</a></div>
                    <div className='items'><a href="#stack-tech">stack tecnológico</a></div>
                    <div className='items tip-container'>
                        <span className="tip">F</span>
                        <span className="tip">K</span>
                        <span className="tip">J</span>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavbarComponent
