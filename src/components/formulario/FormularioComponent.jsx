import './styles.css'
const FormularioComponent = () => {
  const handleContact = (e) => {
    e.preventDefault();
    console.log(e.currentTarget)
  }
  return (
    <>
      <form method="POST" className='formtag' onSubmit={handleContact} id="formulario-contacto">
        <div className="container-groups">
          <div className="input-group">
            <input type="text" placeholder='Correo' name="correo" id="correo" />
            {/* // ! alertas para mostrar errores */}
            {/* <span className="alerta">alerta error</span> */}
          </div>
          <div className="input-group">
            <select name="desarrollador" defaultValue="0">
              <option value="0">Contactar a</option>
              <option value="fgmv08@gmail.com">Frank</option>
              <option value="kevin06092005@gmail.com">Kevin</option>
              <option value="jonathansanchez1612@gmail.com">Jesus</option>
            </select>
            {/* // ! alertas para mostrar errores */}
            {/* <span className="alerta">alerta error</span> */}
          </div>
          <div className="input-group">
            <input type="text" placeholder='Asunto' name="asunto" id="asunto" />
            {/* // ! alertas para mostrar errores */}
            {/* <span className="alerta">alerta error</span> */}
          </div>
          <div className="input-group">
            <input type="text" placeholder='Mensaje' name="mensaje" id="mensaje" />
            {/* // ! alertas para mostrar errores */}
            {/* <span className="alerta">alerta error</span> */}
          </div>
          <div className="input-group input-group-button">
            <button className='submit'>Enviar contacto</button>
          </div>
        </div>
      </form>
      <div className="explicacion">
        <div className="explicacion-content">
          <h1>Contacto</h1>
          <p>EL formulario que tienes a al vista es para contactar a los desarrolladores mostrados en cada una de sus secciones personales.</p>
          <p>Para contactar a alguno de los desarrolladores solo tienes que rellenar los campos en el formulario, seleccionar el desarrollador que te interesa conteactar y enviar el formulario.</p>
          <p>Muchas gracias por vistarnos.</p>
        </div>
      </div>
    </>
  )
}

export default FormularioComponent
