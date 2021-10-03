import React, { Component } from 'react'
import ForgetPassword from './ForgetPassword'
import { connect } from 'react-redux'
import { serverLogin } from './../../actions/AuthAction';

class ForgetPasswordContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password1: '', 
            password2: ''
        }

        this.doReset = this.doReset.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    doReset = () => {
        let obj = {
            password1: this.state.password1,
            password2: this.state.password2,
            email: this.state.email
        }

        if (this.state.password1 !== this.state.password2) {
            alert("Passwords must match");
            return;
        }

        if (window.localStorage.getItem('user')) {
            let existing_user = JSON.parse(window.localStorage.getItem('user'));

            existing_user['password'] = this.state.password1;

        }else{
            window.localStorage.setItem('user', JSON.stringify({'email': this.state.email, 'password': this.state.password1}));
        }

        alert("Password reset successfully");

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
            <ForgetPassword
                {...this.state}
                handleChange={this.handleChange}
                reset_func={this.doReset}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { serverLogin })(ForgetPasswordContainer)