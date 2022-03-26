import { useState } from "react";

const useForm = () => {

    const [first, setFirst] = useState({property: '', valid: 'null'});
    const [last, setLast] = useState({property: '', valid: 'null'});
    const [email, setEmail] = useState({property: '', valid: 'null'});
    const [password, setPassword] = useState({property: '', valid: 'null'});

    function handleSubmit(e){
        e.preventDefault();
        if(first.property.trim() === '' || last.property.trim() === '' || email.property.trim() === '' || password.property.trim() === ''){
            if(first.valid === 'null'){
                setFirst({...first, valid: false})
            }
            if(last.valid === 'null'){
                setLast({...last, valid: false});
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
            setFirst({property: '', valid: 'null'});
            setLast({property: '', valid: 'null'});
            setEmail({property: '', valid: 'null'});
            setPassword({property: '', valid: 'null'});
        }, 4000);
    }

    return ( 
        {
            first,
            setFirst,
            last,
            setLast,
            email,
            setEmail,
            password,
            setPassword,
            handleSubmit
        }
    );
}
 
export default useForm;