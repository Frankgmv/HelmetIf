import './style.css'
const NavbarComponent = () => {
    return (
        <>
            <nav className="nav">
                <div className="nav-title">
                    <h1 className="title">SENA devs</h1>
                </div>
                <div className="container-items">
                    <div className="items dropdown">
                        <a className="dropbtn" href='./frank'>desarrolladores</a>
                        <div className="dropdown-content">
                            <a href="./frank">Frank</a>
                            <a href="./kevin">Kevin</a>
                            <a href="./jesus">Jesus</a>
                        </div>
                    </div>
                    <div className='items'><a href="/#formulario-contacto">contacto</a></div>
                </div>
            </nav>
        </>
    )
}

export default NavbarComponent
