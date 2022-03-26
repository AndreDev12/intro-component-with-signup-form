import PropTypes from 'prop-types';

const Submit = ({type, value}) => {
    return (
        <input
            type={type}
            value={value}
        />
    );
}

Submit.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
};
 
export default Submit;