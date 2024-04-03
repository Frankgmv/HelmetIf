import FormularioComponent from "../formulario/FormularioComponent"

const HomeComponent = () => {
    return (
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
    )
}

export default HomeComponent
