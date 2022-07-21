import PropTypes from 'prop-types';
import { ReactComponent as IconError } from '../assets/icon/icon-error.svg';

const Input = ({changeStatus, type, name, placeholder, state, autoComplete, message}) => {
    
    const expressions = {
        name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letters and spaces can carry accents
        password: /^.{4,12}$/, // 4 to 12 digits
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    }

    const handleChange = ({target}) => {
        if(target.value.trim() === ''){
            changeStatus({property: target.value, valid: false}); 
            return;           
        }
        changeStatus({property: target.value, valid: true});
    }

    const handleBlur = ({target}) => {
        switch(target.type) {
            case 'text':
                if(expressions.name.test(target.value)){
                    changeStatus({...state, valid: true});
                    return;
                }
                changeStatus({...state, valid: false});
                break;
            case 'email':
                if(expressions.email.test(target.value)){
                    changeStatus({...state, valid: true});
                    return;
                }
                changeStatus({property: '', valid: false});
                break;
            default:
                if(expressions.password.test(target.value)){
                    changeStatus({...state, valid: true});
                    return;
                }
                changeStatus({...state, valid: false});
                break;
        }
    };

    return (
        <div
            className="input-group"
        >
            <input 
                type={type}
                name={name}
                value={state.property}
                onChange={handleChange}
                placeholder={placeholder}
                autoComplete={autoComplete}
                className={!state.valid ? "invalid": "valid"}
                onBlur={handleBlur}
            />
            {
                !state.valid ? 
                <>
                    <i 
                        className="icon"
                    >
                        <IconError />
                    </i>
                    <p
                        className="error-paragraph"
                    >{message}</p>
                </> : null
            }
        </div>
    );
}
 
Input.propTypes = {
    changeStatus: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    state: PropTypes.object.isRequired,
    autoComplete: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
};

export default Input;