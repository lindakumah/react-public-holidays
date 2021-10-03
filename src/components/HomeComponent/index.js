import React, { Component } from 'react'
import Home from './Home'
import { connect } from 'react-redux'
import { serverGetHolidays } from './../../actions/HomeAction';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            holidays: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.getHolidays = this.getHolidays.bind(this);
        this.doLogout = this.doLogout.bind(this);
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.home !== this.props.home) {

            this.setState({ holidays: [...this.props.home.holidays] });

        }

    }

    handleChange = (data) => {
        this.setState(prevState => ({
            ...prevState,    // keep all other key-value pairs
            [data.field]: data.value     // update the value of specific key
        }));
    }

    getHolidays = () => {
        if (!this.state.country || !this.state.year || !this.state.month || !this.state.day) {
            alert("Please select all fields");
        }else{
            this.props.serverGetHolidays(this.state);
        }
    }

    doLogout = () => {
        window.localStorage.clear();
        this.props.history.push("/");
    }

    render() {
        return (
            <>
            <Home
                {...this.state}
                handleChange={this.handleChange}
                holiday={this.getHolidays}
                logout_func={this.doLogout}
            />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        home: state.home
    }
}

export default connect(mapStateToProps, { serverGetHolidays })(HomeContainer)