import { useForm } from 'react-hook-form'
import './styles.css'
import toastr from '../../assets/includes/toastr';

const FormularioComponent = () => {
  const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const handleContact = async (data) => {
    console.log(data)
    toastr.success("Email enviado correctamente")
    reset()

  }

  return (
    <>
      <form method="POST" className='formtag' onSubmit={handleSubmit(handleContact)} id="formulario-contacto">
        <div className="container-groups">
          <div className="input-group">
            <input {...register('correo', {
              required: 'Su correo es requerido', pattern: {
                value: emailPattern,
                message: 'El correo electrónico no es válido'
              }
            })} type="text" placeholder='Correo' name="correo" id="correo" />
            {errors.correo && <span className="alerta">{errors.correo.message}</span>}
          </div>
          <div className="input-group">
            <select {...register('desarrollador', { required: "Seleccione el desarrollador" })} name="desarrollador" defaultValue="0">
              <option value="">Contactar a</option>
              <option value="fgmv08@gmail.com">Frank</option>
              <option value="kevin06092005@gmail.com">Kevin</option>
              <option value="jonathansanchez1612@gmail.com">Jesus</option>
            </select>
            {/* // ! alertas para mostrar errores */}
            {errors.desarrollador && <span className="alerta">{errors.desarrollador.message}</span>}
          </div>
          <div className="input-group">
            <input {...register('asunto', { required: "EL asunto es requerido" })} type="text" placeholder='Asunto' name="asunto" id="asunto" />
            {/* // ! alertas para mostrar errores */}
            {errors.asunto && <span className="alerta">{errors.asunto.message}</span>}
          </div>
          <div className="input-group">
            <input {...register('mensaje', { required: "el mensaje es requerido" })} type="text" placeholder='Mensaje' name="mensaje" id="mensaje" />
            {/* // ! alertas para mostrar errores */}
            {errors.mensaje && <span className="alerta">{errors.mensaje.message}</span>}
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
