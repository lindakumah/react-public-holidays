import React, { Component } from 'react'
import { Link } from 'react-router-dom';




const ForgetPassword = (props) => {

    return (
        <section>
            <form action="#" className="login-form">
                <h1 className="forgt-text">Reset Password</h1>

                <div className="txtb">
                    <input type="text" placeholder='Email' onChange={(event) => props.handleChange({ "field": "email", "value": event.target.value })} />
                </div>

                <div className="txtb">
                    <input type="password" placeholder='New Password' onChange={(event) => props.handleChange({"field": "password1", "value": event.target.value})} />
                </div>

                <div className="txtb">
                    <input type="password" placeholder='Confirm Password' onChange={(event) => props.handleChange({"field": "password2", "value": event.target.value})} />
                </div>

                <button className="logbtn" onClick={props.reset_func}>RESET</button>

                <div className="forgt-btn">
                <Link to="/">Back To Login</Link>

                </div>

            </form>
        </section>
    )
}


export default ForgetPassword;