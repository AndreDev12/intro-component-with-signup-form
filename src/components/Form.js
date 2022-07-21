import useForm from "../hook/useForm";
import Input from "./Input";
import Submit from "./Submit";

const Form = () => {

    const { first, setFirst, last, setLast, email, setEmail, password, setPassword, handleSubmit } = useForm();

    return ( 
        <form 
            className="form"
            onSubmit={handleSubmit}
        >
            <Input
                type="text"
                name="first"
                state={first}
                changeStatus={setFirst}
                placeholder="First Name"
                autoComplete="off"
                message="First Name cannot be empty"
            />
            <Input
                type="text"
                name="last"
                state={last}
                changeStatus={setLast}
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
                message="Password cannot be empty"
            />
            <Submit 
                type={"submit"}
                value={"Claim your free trial"}
            />
            <p className="form-paragraph">By clicking the button, you are agreeing to our <span className="terms-services">Terms and Services</span></p>
        </form>
    );
}
 
export default Form;