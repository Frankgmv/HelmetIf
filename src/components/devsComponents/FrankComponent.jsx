import ContentComponent from './ContentComponent'
import './style.css'

const FrankComponent = () => {
  return (
    <div className="container_section">

      <ContentComponent path='frank.png' titulo='¿Quién es Frank?' contenido={'Soy un chico el cual puede aportar mucho con los conocimientos que poseeo, soy actudicta para aprender y a la hora de programar trato de trabajar de la mejor manera posible. Soy un joven con muchas ideas a la hora de trabajar, capacidad para adaptarse a cualquier entorno de trabajo además de ejetucar ordenes de manera muy eficaz.'} cabezera='Presentación de Frank' pie='Conece más sobre mi' link={'https://www.instagram.com/franko_mv/'} />

      <ContentComponent path='habilidades.png' titulo='¿Qué habilidades poseeo?' contenido={'Poseeo conocimientos en ciertas areas como desarrollo web con HTML, CSS, y JavaScript, también e trabajado framework como React y marcos de trabajos como Node. Control de versiones y bases de datos SQL y NO SQL como MySQL, MSSQL y MongoDB. También e trabajado con lenguajes orientados a Objetos como Java, poseeo habilidades para el manejo de la terminal.'} cabezera='Habilidades' pie='Conoce mis proyectos' link="https://github.com/stars/Frankgmv/lists/sena-practicas" />

      <ContentComponent path='gitfrank.png' cabezera='Mis proyectos' contenido={'En mi repositorio puedes concontrar multimples proyectos desde mis inicios hasta los más actuales como de mi técnica en programación hasta la tecnoligía actualmente, aquí hay mucha diversidad de proyecto que ratifican mis habilidades mostradas anteriormente.'} titulo='¿Qué proyectos he realizado?' pie='Ver Repositorio' link="https://github.com/Frankgmv" />

      <ContentComponent path='sena.png' titulo='¿En que universidad estudie?' contenido={'Mis estudios hasta ahora han sido con el Servicio Nacional de Aprendizaje o más conocido como SENA, tengo varios certificaciones realizadas con está entidad, una de las primeras fue mi Técnica en desarrollo de Software'} cabezera='Estudios' pie='Ver entidad' link="https://oferta.senasofiaplus.edu.co/sofia-oferta/" />

    </div>
  )
}

export default FrankComponent
