import React, {useContext, useRef} from 'react';
import {useForm} from 'react-hook-form';
import {AuthContext} from '../../context/authContext';

function Login(props) {
    const {errors, handleSubmit, register, watch} = useForm();

    const {login} = useContext(AuthContext);

    const onSubmit = (data) => {
        console.log(data);
        if (data['password'] === 'admin') {
            login();
        }
    };

    const formRef = useRef(null);
    console.log(watch('password'));

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
                <div>
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="address"
                        ref={register({required: true, minLength: 3})}
                    />
                </div>
                <div>
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="exampleInputPassword1"
                        ref={register({required: true})}
                    />
                </div>
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Login;