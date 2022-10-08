import PropTypes from 'prop-types'

function Titulo({nombre, apellido}) {
    
    return ( <h1>Hola {nombre} {apellido}</h1> );
}

Titulo.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string
};

export default Titulo;