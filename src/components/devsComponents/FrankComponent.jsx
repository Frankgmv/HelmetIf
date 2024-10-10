import ContentComponent from './ContentComponent'
import ListComponent from './ListComponent'
import './style.css'

const FrankComponent = () => {
  return (
    <div className="container_section">

      <ContentComponent path='frank.png' titulo='Me llamo Frank' contenido={'Soy una persona con una sólida base de conocimientos adquiridos a través de varios proyectos realizados durante sus estudios y diversos programas realizados simultáneamente a estos. Estas experiencias me han proporcionado aptitudes y actitudes las cuales crecen con el tiempo. las cuales me han sido valiosas para crear y construir en el sector TI.'} cabezera='Hey‼️' pie='Conece más sobre él' link={'https://www.instagram.com/franko_mv/'} />

      <ContentComponent path='habilidades.png' titulo='¿Y cuales son?' contenido={'Mi inclinación al autoaprendizaje y aporte de ideas productivas en los retos; Ayudar a generar soluciones rápidas y precisas en los entornos profesionales. Mis características principales son la responsabilidad y compromiso, siempre dando lo mejor en cada una de las tareas que realizó en en la cotidianidad.'} cabezera='Ahora sus capacidades' pie='Visita su Linkedin' link="https://www.linkedin.com/in/frankgmv/" />
      
      <ListComponent list={['Comunicación Activa', 'Comunicación Receptiva', 'Adaptabilidad', 'Resolución de problemas', 'Inglés técnico', 'Excel básico']} path='h_blandasv2.png' titulo='Soft Skills / Habilidades blandas' cabezera='Veamos ahora habilidades' />

      <ListComponent list={['HTML, CSS, JavaScript', 'PHP', 'Nodejs', 'React', 'Git y GitHub', 'Java', 'Bases de datos SQL y No SQL', 'RPA\'s con Python', 'Microsoft Power Apps']} path='h_v3.png' titulo='Hard Skills / Habilidades duras' pie='Conoce mis proyectos' />

      <ContentComponent path='gitfrank.png' contenido={'En mi repositorio puedes concontrar multimples proyectos desde mis inicios hasta los más actuales en mi carrera; Algunos desplegados en línea que puedes visitar.'} titulo='Proyectos' pie='Veamos más' link="https://github.com/Frankgmv" />

      <ContentComponent path='sena.png' titulo='¿En dónde aprendí estudie?' contenido={'Mis estudios hasta ahora han sido con el Servicio Nacional de Aprendizaje o más conocido como SENA, tengo varios certificaciones realizadas con está entidad, una de las primeras fue mi Técnica en desarrollo de Software;  Más recientemente mi técnología.'} cabezera='Estudios' pie='Ver entidad' link="https://oferta.senasofiaplus.edu.co/sofia-oferta/" />
    </div>
  )
}

export default FrankComponent
