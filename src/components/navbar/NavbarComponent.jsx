import { Link } from 'react-router-dom'
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
                            <Link to="./frank">Frank</Link>
                            <Link to="./kevin">Kevin</Link>
                        </div>
                    </div>
                    <div className='items'><Link className='a-item' to="/">contacto</Link></div>
                </div>
            </nav>
        </>
    )
}

export default NavbarComponent
