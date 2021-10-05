import React, { Component } from 'react'
import Login from './login'
import { connect } from 'react-redux'
import { serverLogin } from './../../actions/AuthAction';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }

        this.doLogin = this.doLogin.bind(this);
        this.handleChange = this.handleChange.bind(this)

    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState) {

    }

    doLogin = () => {
        let obj = {
            password: this.state.password,
            email: this.state.email
        }

        if (!window.localStorage.getItem('user')) {
            alert("Wrong email or password");

            return;
        }

        let existing_user = JSON.parse(window.localStorage.getItem('user'));

        if (this.state.email === existing_user.email && this.state.password === existing_user.password) {
            window.localStorage.setItem('user', JSON.stringify(obj));
            this.props.serverLogin(obj)
            this.props.history.push("/home");
            return;

        } else {

            alert("Wrong email and password");
            return;
        }
    }

    handleChange = (data) => {
        this.setState(prevState => ({
            ...prevState,    // keep all other key-value pairs
            [data.field]: data.value     // update the value of specific key
        }));
    }

    render() {
        return (
            <>
            <Login
                {...this.state}
                handleChange={this.handleChange}
                login_func={this.doLogin}
            />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { serverLogin })(LoginContainer)