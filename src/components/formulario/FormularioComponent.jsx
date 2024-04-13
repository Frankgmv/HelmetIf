import { useForm } from 'react-hook-form'
import './styles.css'
import toastr from '../../assets/includes/toastr';

const FormularioComponent = () => {
  const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const handleContact = async (data) => {
    toastr.clear()
    toastr.warning("Email no se pudo enviar")
    toastr.info(`Envia el correo a: ${data.desarrollador}`)
    setTimeout(()=>{
      reset()
    }, 15000)
  }

  return (
    <>
      <form method="POST" className='formtag' onSubmit={handleSubmit(handleContact)} id="formulario-contacto">
        <div className="container-groups">
          <div className="input-group">
            <input {...register('correo', {
              required: false, pattern: {
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
            </select>
            {errors.desarrollador && <span className="alerta">{errors.desarrollador.message}</span>}
          </div>
          <div className="input-group">
            <input {...register('asunto', { required: false })} type="text" placeholder='Asunto' name="asunto" id="asunto" />
            {errors.asunto && <span className="alerta">{errors.asunto.message}</span>}
          </div>
          <div className="input-group">
            <input {...register('mensaje', { required: false })} type="text" placeholder='Mensaje' name="mensaje" id="mensaje" />
            {errors.mensaje && <span className="alerta">{errors.mensaje.message}</span>}
          </div>
          <div className="input-group input-group-button">
            <button className='submit'>Contactar</button>
          </div>
        </div>
      </form>
      <div className="explicacion">
        <div className="explicacion-content">
          <h1>Contacto</h1>
          <p>El formulario que tienes a al vista es para contactar a los desarrolladores mostrados en cada una de sus secciones personales.</p>
          <p>Para contactar a alguno de los desarrolladores solo tienes que rellenar los campos en el formulario, seleccionar el desarrollador que te interesa conteactar y enviar el formulario.</p>
          <p>Muchas gracias por vistarnos.</p>
        </div>
      </div>
    </>
  )
}

export default FormularioComponent
