import { BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react';
import LoginContainer from "./components/AuthComponent";
import HomeContainer from "./components/HomeComponent";
import ForgetPasswordContainer from "./components/ForgetPasswordComponent";
import SignupContainer from "./components/Signup";

import './App.css';
import './main.css';
function App() {
  return (
    <div>
      <Router>
        <Route path="/" component={LoginContainer} exact />
        <Route path="/forget-password" component={ForgetPasswordContainer} exact />
        <Route path="/sign-up" component={SignupContainer} exact />
        <Route path="/home" component={HomeContainer} exact />
      </Router>
    </div>
  );
}



export default App;