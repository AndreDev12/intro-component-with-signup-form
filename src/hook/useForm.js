import { useState } from "react";

const useForm = () => {

    const [firstName, setFirstName] = useState({property: '', valid: 'null'});
    const [lastName, setLastName] = useState({property: '', valid: 'null'});
    const [email, setEmail] = useState({property: '', valid: 'null'});
    const [password, setPassword] = useState({property: '', valid: 'null'});

    function handleSubmit(e){
        e.preventDefault();
        if(firstName.property.trim() === '' || lastName.property.trim() === '' || email.property.trim() === '' || password.property.trim() === ''){
            if(firstName.valid === 'null'){
                setFirstName({...firstName, valid: false})
            }
            if(lastName.valid === 'null'){
                setLastName({...lastName, valid: false});
            }
            if(email.valid === 'null'){
                setEmail({...email, valid: false});
            }
            if(password.valid === 'null'){
                setPassword({...password, valid: false});
            }
            return;
        }
        setTimeout(() => {
            setFirstName({property: '', valid: 'null'});
            setLastName({property: '', valid: 'null'});
            setEmail({property: '', valid: 'null'});
            setPassword({property: '', valid: 'null'});
        }, 4000);
    }

    return ( 
        {
            firstName,
            lastName,
            email,
            password,
            setFirstName,
            setLastName,
            setEmail,
            setPassword,
            handleSubmit
        }
    );
}
 
export default useForm;