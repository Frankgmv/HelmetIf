import { useForm } from 'react-hook-form'
import './styles.css'
import toastr from '../../assets/includes/toastr';



const FormularioComponent = () => {
  const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const sendEmail = async (to, subject, text) => {
    const data = {
      from: 'fgmv08@gmail.com',
      to,
      subject,
      text,
    };

    console.log(data);
    // Enviar datos
  };

  const handleContact = async (data) => {
    // console.log(data)
    sendEmail(data.desarrollador, `${data.correo} | ${data.asunto}`, data.mensaje)
    toastr.clear()
    toastr.warning("Email no se pudo enviar")
    toastr.info(`Envia el correo a: ${data.desarrollador}`)
    setTimeout(() => {
      reset()
    }, 15000)
  }



  return (
    <>
      <form method="POST" className='formtag' onSubmit={handleSubmit(handleContact)} id="formulario-contacto">
        <div className="container-groups">
          <div className="input-group">
            <input autoComplete='off' {...register('correo', {
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
            <input autoComplete='off' {...register('asunto', { required: false })} type="text" placeholder='Asunto' name="asunto" id="asunto" />
            {errors.asunto && <span className="alerta">{errors.asunto.message}</span>}
          </div>
          <div className="input-group">
            <input autoComplete='off' {...register('mensaje', { required: false })} type="text" placeholder='Mensaje' name="mensaje" id="mensaje" />
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
          <p>Puedes contactar a cada uno de los desarrolladores mostrados en sus secciones personales. </p>
          <p>Gracias por vistarnos.</p>
        </div>
      </div>
    </>
  )
}

export default FormularioComponent
