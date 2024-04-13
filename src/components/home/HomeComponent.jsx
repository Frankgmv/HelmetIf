import { Link } from "react-router-dom"
import FormularioComponent from "../formulario/FormularioComponent"

const HomeComponent = () => {
    return (
        <main className="main">
            <div className="formulario">
                <FormularioComponent />
            </div>
            <div className="stack-tech" id="stack-tech">
                <h3>Conoce los creadores</h3>
                <ul className="container-tech">
                    <li className="tech"><Link href="./frank"> Frank</Link></li>
                    <li className="tech"><Link href="./kevin"> Kevin</Link></li>
                </ul>
            </div>
            <div className="stack-tech" style={{fontSize: '.7em'}} id="stack-tech">
                <h3>Desarrolladores es divertidos!!!</h3>
                <h3 style={{marginLeft: '20px'}}>(*/ω＼*)</h3>
            </div>
        </main>
    )
}

export default HomeComponent
