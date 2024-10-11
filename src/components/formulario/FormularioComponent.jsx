import { useForm } from 'react-hook-form'
import './styles.css'
import toastr from '../../assets/includes/toastr';


const URL_CORREOS = "https://iecentenario.edu.co/api/v1/send-email"

const FormularioComponent = () => {
  const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const sendEmail = async (para, correoPersona, asunto, cuerpo) => {
      const messageEmail = `Te busca contactar ${correoPersona}.\n \n \t \t Te deja el siguiente mensaje:  ${cuerpo} \n \n Este correo es propiedad de https://senadevsportafolio.netlify.app. \n Correo con el fin de notificar.`

      const messageEmailContacto = `Correo enviado a ${para} exitosamente.\n \n \t \t Espera a que el se contacte contigo. \n \n Asunto: ${asunto} \n \n motivo: ${cuerpo} \n \n Este correo es propiedad de https://senadevsportafolio.netlify.app. \n Correo con el fin de notificar.`

    const data_para_dev = {
      para,
      asunto: 'ENVIADO desde PORTAFOLIO.DEVS.SENA || '+ asunto,
      cuerpo: messageEmail
    };

    const data_para_contacto = {
      para: correoPersona,
      asunto: 'ENVIADO desde PORTAFOLIO.DEVS.SENA || '+ `Notificación Recibida`,
      cuerpo: messageEmailContacto
    };    

    const res_1 = await fetch(URL_CORREOS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data_para_dev)
    })

    const res_2 = await fetch(URL_CORREOS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data_para_contacto)
    })

    const res_dev = await res_1.json()
    const res_contact = await res_2.json()

    return {res_contact, res_dev}
  };


  const handleContact = async (data) => {
    try {
      const res = await sendEmail(data.desarrollador, data.correo, data.asunto, data.mensaje)
      toastr.clear()

      if(res.res_contact.ok){
        toastr.info(`${res.res_contact.message}`)
        reset()
      }
      
      if(res.res_dev.ok){
        toastr.info(`${res.res_dev.message}`)
        reset()
      }else{
        toastr.error("Intenta más tarde.")
      }

      setTimeout(() => {
        reset()
      }, 15000)
    } catch(e){
      console.log(e)
    }
  }



  return (
    <>
      <form method="POST" className='formtag' onSubmit={handleSubmit(handleContact)} id="formulario-contacto">
        <div className="container-groups">
          <div className="input-group">
            <input autoComplete='off' {...register('correo', {
              required: "El correo es obligatorio", pattern: {
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
            <input autoComplete='off' {...register('asunto', { required: "Agrega el asunto" })} type="text" placeholder='Asunto' name="asunto" id="asunto" />
            {errors.asunto && <span className="alerta">{errors.asunto.message}</span>}
          </div>
          <div className="input-group">
            <input autoComplete='off' {...register('mensaje', { required: "Agrega tu motivo de contacto" })} type="text" placeholder='Mensaje' name="mensaje" id="mensaje" />
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
