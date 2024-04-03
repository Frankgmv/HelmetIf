
const FooterComponent = () => {
  const handleContact = (e) => {
    e.preventDefault();
    console.log(e.currentTarget)
  }
  return (
    <form method="POST" onSubmit={handleContact} id="formulario-contacto">
      <div className="input-group">
        <label htmlFor="correo"></label>
        <input type="text" name="correo" id="correo" />
        <p className="alerta"></p>
      </div>
      <div className="input-group">
        <label htmlFor="celular"></label>
        <input type="text" name="celular" id="celular" />
        <p className="alerta"></p>
      </div>
      <div className="input-group">
        <label htmlFor="asunto"></label>
        <input type="text" name="asunto" id="asunto" />
        <p className="alerta"></p>
      </div>
      <div className="input-group">
        <label htmlFor="mensaje"></label>
        <input type="text" name="mensaje" id="mensaje" />
        <p className="alerta"></p>
      </div>
      <button>Enviar</button>
    </form>
  )
}

export default FooterComponent
