import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validator/validators";
import { Input } from "../common/FormControl/FormsControl";

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}


const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Login"} name={"login"} component={Input} 
            validate={[required, maxLengthCreator(10)]}/>
        </div>
        <div>
            <Field placeholder={"Password"} name={"password"} component={Input} 
            validate={[required, maxLengthCreator(10)]}/>
        </div>
        <div>
            <Field type={"checkbox"} name={"rememberMe"} component ={"input"} /> remember me
        </div>
        <div>
            <button>login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm)

export default Login;