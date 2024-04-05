import ContentComponent from "./ContentComponent"
import ListComponent from "./ListComponent"

const JesusComponent = () => {
  return (
    <div className="container_section">
      <ContentComponent path='jesus.jpg' titulo='¿Quién es Jesus?' contenido={'Como desarrollador, me considero una persona apasionada por la creación de soluciones innovadoras a través del código. Disfruto enfrentando desafíos técnicos y buscando maneras creativas de resolver problemas. Mi habilidad para trabajar en equipo y comunicar ideas complejas me permite destacarme en mi campo. Siempre estoy en busca de aprender y mejorar mis habilidades. Y habilidades soy bueno en el campo de front y en el back intento mejorar cada día más'} cabezera='Presentación de Jesus' pie='Sigue, te presento más sobre mi' link="https://www.instagram.com/jonathan_cs16?igsh=MTV0amUxemNlOHE3NA==" />

      <ContentComponent path='capacidades.png' titulo='¿Qué capacidades poseeo?' contenido={'Tengo capacidades diversas tales como aprendizaje rápido y autosucifiente, cualquier tema nuevo que requiera aprender para completar una tarea lo conciderare como una meta personal de mi semana. algo que me caracteriza es mi responsabilidad con mis compromisos, siempre trato de dar lo mejor de mí en cada una de las tareas que realizo en el día a día.'} cabezera='Capacidades' pie='Mejora tus capacidades' link="https://leadershipandmuchmore.com/es/mejore-sus-capacidades-profesionales/" />
      
      <ListComponent list={['HTML, CSS, JavaScript', 'Nodejs', 'React', 'Manejo de Terminal', 'Git y GitHub', 'Java', 'Bases de datos SQL y No SQL']} path='habilidades.png' titulo='¿Qué habilidades poseeo?' cabezera='Habilidades' pie='Conoce mis proyectos' link="https://github.com/jonathanCs16?tab=repositories" />

      <ContentComponent path='gitjesus.png' cabezera='Mis proyectos' contenido={'En mi repositorio puedes concontrar multimples proyectos desde mis inicios hasta los más actuales como de mi técnica en programación hasta la tecnoligía actualmente, aquí hay mucha diversidad de proyecto que ratifican mis habilidades mostradas anteriormente.'} titulo='¿Qué proyectos he realizado?' pie='Ver Repositorio' link="https://github.com/jonathanCs16" />

      <ContentComponent path='sena.png' titulo='¿En que universidad estudie?' contenido={'Mis estudios hasta ahora han sido con el Servicio Nacional de Aprendizaje o más conocido como SENA, tengo varios certificaciones realizadas con está entidad, una de las primeras fue mi Técnica en desarrollo de Software'} cabezera='Estudios' pie='Ver entidad' link="https://oferta.senasofiaplus.edu.co/sofia-oferta/" />
    </div>
  )
}

export default JesusComponent
