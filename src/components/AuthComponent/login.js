import React from 'react';
import { Link } from 'react-router-dom';

const Login = (props) => {

    return (
        <section>
            <form action="#" className="login-form">
                <h1>Login</h1>

                <div className="txtb">
                    <input type="text" placeholder='Email'  onChange={(event) => props.handleChange({"field": "email", "value": event.target.value})}/>
                </div>

                <div className="txtb">
                    <input type="password" placeholder='Password' onChange={(event) => props.handleChange({"field": "password", "value": event.target.value})}/>              
                </div>

                <button className="logbtn" onClick={props.login_func}>LOGIN</button>

                <div className="forgt-btn">
                    <Link to='/forget-password'><h4>Forgot Password</h4></Link>

                </div>

                <div className="bottom-text">
                    Don't have account? <Link to="/sign-up"> Sign up</Link>

                </div>

            </form>
        </section>
    )
}

export default Login;