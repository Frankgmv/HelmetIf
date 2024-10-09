import PropTypes from 'prop-types';

const ListComponent = ({ path, titulo, list, cabezera, pie, link }) => {

  return (
    <section className="content">
      <div className="container-text">
        {

         cabezera && <p className="text-bridge"><b className="line">------</b> {cabezera}</p>
        }
        <h2 className="text-title">{titulo}</h2>
        <ul className="list">
          {
            list.map((item, i) => {
              return (
                <li key={i}>{item}</li>
              )
            })
          }
        </ul>{link && <p className="text-bridge"><a href={link} target='_blank'>{pie} </a><b className="line">-------</b></p>}
      </div>
      <div className="container-img">
        <img src={`/${path}`} alt={path} />
      </div>
    </section>
  )
}

ListComponent.propTypes = {
  path: PropTypes.string.isRequired,
  titulo: PropTypes.string,
  list: PropTypes.array,
  cabezera: PropTypes.string,
  pie: PropTypes.string,
  link: PropTypes.string
};

ListComponent.defaultProps = {
  link: "",
  pie: "Read More",
  list: ['Habilidad 1', 'Habilidad 2', 'Habilidad 3']
};

export default ListComponent
