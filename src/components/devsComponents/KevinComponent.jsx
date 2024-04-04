import ContentComponent from "./ContentComponent"
import './style.css'
const KevinComponent = () => {
  return (
    <div className="container_section">
      <ContentComponent path='kevin.png' titulo='¿Quién es kevin?' contenido={'¡Hola! Soy Kevin Castrillón, un joven de 18 años con grandes aspiraciones y motivación para aprender y compartir conocimiento. Aunque soy introvertido, mi carisma brilla, y a pesar de mi timidez, me desenvuelvo bien socialmente. Cuento con una técnica en desarrollo de software, he realizado diversos cursos gastronómicos y obtenido certificaciones en arquitectura, incluyendo diseño de planos, interiores, estructuras y manejo de personal. Hablo inglés con algo de fluidez y estoy aprendiendo francés e italiano. Actualmente, me enfoco en el análisis y desarrollo de software.'} cabezera='Presentación de Kevin' pie='Sigue, te presento más sobre mi'  link='https://www.instagram.com/keva_cg?igsh=Y3prOGU4ZWx3bG8x'/>

      <ContentComponent path='habilidades.png' titulo='¿Qué habilidades poseeo?' contenido={'Poseeo conocimientos en ciertas areas como desarrollo web con HTML, CSS, y JavaScript, también e trabajado framework como React y marcos de trabajos como Node. Control de versiones y bases de datos SQL y NO SQL como MySQL, MSSQL y MongoDB. También e trabajado con lenguajes orientados a Objetos como Java, poseeo habilidades para el manejo de la terminal.'} cabezera='Habilidades' pie='Conoce mis proyectos' link="https://github.com/KevaCG" />

      <ContentComponent path='gitkevin.png' cabezera='Mis proyectos' contenido={'En mi repositorio puedes concontrar multimples proyectos desde mis inicios hasta los más actuales como de mi técnica en programación hasta la tecnoligía actualmente, aquí hay mucha diversidad de proyecto que ratifican mis habilidades mostradas anteriormente.'} titulo='¿Qué proyectos he realizado?' pie='Ver Repositorio' link="https://github.com/KevaCG?tab=repositories" />

      <ContentComponent path='sena.png' titulo='¿En que universidad estudie?' contenido={'Mis estudios hasta ahora han sido con el Servicio Nacional de Aprendizaje o más conocido como SENA, tengo varios certificaciones realizadas con está entidad, una de las primeras fue mi Técnica en desarrollo de Software'} cabezera='Estudios' pie='Ver entidad' link="https://oferta.senasofiaplus.edu.co/sofia-oferta/" />
    </div>
  )
}

export default KevinComponent
