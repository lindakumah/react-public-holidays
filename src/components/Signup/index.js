import React, { Component } from 'react'
import Signup from './Signup'
import { connect } from 'react-redux'
import { serverLogin } from '../../actions/AuthAction';

class SignupContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            username: ''
        }

        this.doSignUp = this.doSignUp.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    doSignUp = () => {
        let obj = {
            password: this.state.password,
            email: this.state.email,
            username: this.state.username
        }

        console.log(obj);

        if (this.state.username === '' || this.state.email === '' || this.state.password === '') {
            alert("All fields are required");
        }else{
            window.localStorage.setItem('user', JSON.stringify(obj));
            alert("Account created successfully");
        }

        return;
    }

    handleChange = (data) => {
        this.setState(prevState => ({
            ...prevState,    // keep all other key-value pairs
            [data.field]: data.value     // update the value of specific key
        }));
    }

    render() {
        return (
            <Signup
                {...this.state}
                handleChange={this.handleChange}
                signup_func={this.doSignUp}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { serverLogin })(SignupContainer)