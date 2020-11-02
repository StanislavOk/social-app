import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import { Input } from "../../Components/common/FormControls/FormsControls";
import { required } from '../../utils/validators/validator';
import { connect } from 'react-redux';
import { login } from '../../redux/Auth-reducer';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required]} name={'email'} component={Input} placeholder={'Email'} />
            </div>
            <div>
                <Field validate={[required]} type={'password'} name={'password'} component={Input} placeholder={'Password'} />
            </div>
            <div>
                <Field name={'rememberMe'} component={Input} type={'checkbox'} /> remember me
             </div>
            <div>
                <button type={'submit'}>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login' //unic name
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    return <div>
        <h1> Login </h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}



export default connect(null, { login })(Login);