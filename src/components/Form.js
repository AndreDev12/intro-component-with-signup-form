import useForm from "../hook/useForm";
import Input from "./Input";
import Submit from "./Submit";

const Form = () => {

    const { firstName, lastName, email, password, setFirstName, setLastName, setEmail, setPassword, handleSubmit} = useForm();

    return ( 
        <form 
            className="form"
            onSubmit={handleSubmit}
        >
            <Input
                type="text"
                name="firstName"
                state={firstName}
                changeStatus={setFirstName}
                placeholder="First Name"
                autoComplete="off"
                message="First Name cannot be empty"
            />
            <Input
                type="text"
                name="lastName"
                state={lastName}
                changeStatus={setLastName}
                placeholder="Last Name"
                autoComplete="off"
                message="Last Name cannot be empty"
            />
            <Input
                type="email"
                name="email"
                state={email}
                changeStatus={setEmail}
                placeholder={email.valid ? "Email Address" : "email@example.com"}
                autoComplete="off"
                message="Looks like this is not an email"
            />
            <Input
                type="password"
                name="password"
                state={password}
                changeStatus={setPassword}
                placeholder="Password"
                autoComplete="off"
                message="Write at least 4 characters"
            />
            <Submit 
                type="submit"
                value={(firstName.property.trim() === '' || lastName.property.trim() === '' || email.property.trim() === '' || password.property.trim() === '') ? "Claim your free trial" : "Validation passed!"}
            />
            <p className="form-paragraph">By clicking the button, you are agreeing to our <span className="terms-services">Terms and Services</span></p>
        </form>
    );
}
 
export default Form;