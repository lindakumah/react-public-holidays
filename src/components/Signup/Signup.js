import React from 'react';
import { Link } from 'react-router-dom';



const Signup = (props) => {

    return (
        <section>
            <form action="#" className="login-form">
                <h1>Register</h1>

                <div className="txtb">
                    <input type="text" placeholder="Username" onChange={(event) => props.handleChange({"field": "username", "value": event.target.value})}/>
                </div>


                <div className="txtb">
                    <input type="text" placeholder="E-mail" onChange={(event) => props.handleChange({"field": "email", "value": event.target.value})}/>
                </div>

                <div className="txtb">
                    <input type="password" placeholder="Password" onChange={(event) => props.handleChange({"field": "password", "value": event.target.value})}/>
                </div>


                <button className="logbtn" onClick={props.signup_func}>REGISTER</button>

                <div className="bottom-text"> Allready Have Account?
                <Link to="/">Login</Link>
                </div>

            </form>
        </section>
    )
}

export default Signup;