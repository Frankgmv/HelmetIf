import './style.css'
const NavbarComponent = () => {
    return (
        <>
            <nav className="nav">
                <div className="nav-title">
                    <h1 className="title">SENA dev&apos;s</h1>
                </div>
                <div className="container-items">
                    <div className="items dropdown">
                        <a className="dropbtn" href='#'>desarrolladores</a>
                        <div className="dropdown-content">
                            <a href="./frank">Frank</a>
                            <a href="./kevin">Kevin</a>
                        </div>
                    </div>
                    <div className='items'><a className='a-item' href="/#formulario-contacto">contacto</a></div>
                </div>
            </nav>
        </>
    )
}

export default NavbarComponent
