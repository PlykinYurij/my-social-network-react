import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validator/validators";
import { Input } from "../common/FormControl/FormsControl";
import { login } from "../../Redux/auth-reducer"
import { Navigate } from "react-router-dom";
import classes from "../common/FormControl/FormsControl.module.css"

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to={"/profile"} />
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}


const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Email"} name={"email"} component={Input}
                validate={[required, maxLengthCreator(30)]} />
        </div>
        <div>
            <Field placeholder={"Password"} name={"password"} component={Input} type={"password"}
                validate={[required, maxLengthCreator(20)]} />
        </div>
        <div>
            <Field type={"checkbox"} name={"rememberMe"} component={"input"} /> remember me
        </div>
        {
            props.error && <div className={classes.formSammaryError}>
                {props.error}
            </div>
        }
        <div>
            <button>login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm)

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);