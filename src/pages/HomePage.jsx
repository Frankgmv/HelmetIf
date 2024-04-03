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
                        <div className="banner-title">Portafolio dev&apos;s HelmetIf</div>
                        <p className="banner-descripcion">Portafolio de habilidades de desarrollares del sitio HelmetIf, desde
                            datos personales hasta profesionales. &nbsp;
                            Acompame a conocer más sobre el talento humano que llevo desarrollar el sitio de HelmetIf.
                        </p>
                    </div>
                </div>
            </header>
            <main className="main">
                <div className="formulario">
                    <FormularioComponent />
                </div>
                <div className="stack-tech" id="stack-tech">
                    <h3>Stack Tecnológico</h3>
                    <ul className="container-tech">
                        <li className="tech"><a href="#"> React-Hook-form</a></li>
                        <li className="tech"><a href="#"> Resend</a></li>
                        <li className="tech"><a href="#"> Remix-Icon</a></li>
                        <li className="tech"><a href="#"> Toastr</a></li>
                    </ul>
                </div>
            </main>
            <footer className="footer">
                &copy; todos los derechos de reservados
            </footer>
        </>
    )
}

export default HomePage
