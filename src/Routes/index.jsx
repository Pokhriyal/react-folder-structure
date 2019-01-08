import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';


//Routing
import LoginComponent from '@components/LoginComponent';
import ForgotpassComponent from '@components/OnboardComponent/ForgotpassComponent';
import TermsandConditions from '@components/OnboardComponent/TermsandConditions';
import SecurityQuestion from '@components/OnboardComponent/SecurityQuestion';
import SecretPicture from '@components/OnboardComponent/SecretPicture';
import ChangePassword from '@components/OnboardComponent/ChangePassword';

import DashboardComponent from '@components/DashboardComponent';

export default class index extends Component {
  render() {
    return (
    <React.Fragment>
          <Switch>
          <Route path="/login" name="Login" component={LoginComponent}/>
          <Route path="/dashboard" name="Dashboard" component={DashboardComponent}/>
          <Route path="/forgotpass" name="Forgot Password" component={ForgotpassComponent}/>
          <Route path="/termsandconditions" name="Terms and Conditions" component={TermsandConditions}/>
          <Route path="/securityquestion" name="Security Question" component={SecurityQuestion}/>
          <Route path="/secretpicture" name="Secret Picture" component={SecretPicture}/>
          <Route path="/changepassword" name="Secret Picture" component={ChangePassword}/>
          <Redirect from="/" to="/login"/>
        </Switch>
    </React.Fragment>
    )
  }
}
