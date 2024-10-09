import PropTypes from 'prop-types';
import './style.css'
const ContentComponent = ({path, titulo, contenido, cabezera, pie, link}) => {

    return (
        <section className="content">
            <div className="container-text">
                {

                 cabezera && <p className="text-bridge"><b>------</b> {cabezera}</p>
                }
                <h2 className="text-title">{titulo}</h2>
                <p className="text-description">{contenido}</p>
                <p className="text-bridge"><a href={link} target='_blank'>{pie} </a><b className="line">-------</b></p>
            </div>
            <div className="container-img">
                <img src={`/${path}`} alt={path} />
            </div>
        </section>
    )
}

ContentComponent.propTypes = {
    path: PropTypes.string.isRequired,
    titulo: PropTypes.string,
    contenido: PropTypes.string,
    cabezera: PropTypes.string,
    pie: PropTypes.string,
    link: PropTypes.string
};

ContentComponent.defaultProps = {
    link: "",
    pie: "Read More"
};

export default ContentComponent
