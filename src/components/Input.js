import { Fragment } from 'react';
import PropTypes from 'prop-types';

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
            {!state.valid ? 
            <Fragment>
                <i 
                    className="icon"
                >
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#FF7979" cx="12" cy="12" r="12"/><rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1"/><rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1"/></g></svg> 
                </i>
                <p
                    className="error-paragraph"
                >{message}</p>
            </Fragment> : null}
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