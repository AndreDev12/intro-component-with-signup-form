import PropTypes from 'prop-types';
import { ReactComponent as IconError } from '../assets/icon/icon-error.svg';

const Input = ({type, name, state, changeStatus, placeholder, autoComplete, message}) => {
    
    const regularExpressions = {
        name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
        password: /^.{4,12}$/,
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
                if(regularExpressions.name.test(target.value)){
                    changeStatus({...state, valid: true});
                    return;
                }
                changeStatus({...state, valid: false});
                break;
            case 'email':
                if(regularExpressions.email.test(target.value)){
                    changeStatus({...state, valid: true});
                    return;
                }
                changeStatus({property: '', valid: false});
                break;
            default:
                if(regularExpressions.password.test(target.value)){
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
                !state.valid &&
                <>
                    <i 
                        className="icon"
                    >
                        <IconError />
                    </i>
                    <p
                        className="error-paragraph"
                    >{message}</p>
                </>
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