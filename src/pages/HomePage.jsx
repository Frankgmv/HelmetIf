import { Route, Routes } from "react-router-dom"
import FormularioComponent from "../components/formulario/FormularioComponent"
import NavbarComponent from "../components/navbar/NavbarComponent"
import './style.css'
const HomePage = () => {
    return (
        <>
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
            <main className="main">
                <div className="formulario">
                    <FormularioComponent />
                </div>
                <div className="stack-tech" id="stack-tech">
                    <h3>Tecnologías implementadas</h3>
                    <ul className="container-tech">
                        <li className="tech"><a target="_blank" href="https://react-hook-form.com/"> React-Hook-form</a></li>
                        <li className="tech"><a target="_blank" href="https://resend.com/"> Resend</a></li>
                        <li className="tech"><a target="_blank" href="https://remixicon.com/"> Remix-Icon</a></li>
                        <li className="tech"><a target="_blank" href="https://ngx-toastr.vercel.app/"> Toastr</a></li>
                    </ul>
                </div>
            </main>
            <footer className="footer">
                &copy; todos los derechos de reservados
            </footer>

            <Routes>
                <Route path="./frank" element={<h1>Frank</h1>} />
                <Route path="./kevin" element={<h1>kevin</h1>} />
                <Route path="./jesus" element={<h1>jesus</h1>} />
            </Routes>
        </>
    )
}

export default HomePage
