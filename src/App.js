import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.scss';


import LoginComponent from '@components/LoginComponent';
import ForgotpassComponent from '@components/OnboardComponent/ForgotpassComponent';
import TermsandConditions from '@components/OnboardComponent/TermsandConditions';
import SecurityQuestion from '@components/OnboardComponent/SecurityQuestion';
import SecretPicture from '@components/OnboardComponent/SecretPicture';
import ChangePassword from '@components/OnboardComponent/ChangePassword';

import DashboardComponent from '@components/DashboardComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1>Vivek</h1>
        <Button type="primary">Button</Button>

        <div class="alert alert-primary" role="alert">
          A simple primary alert—check it out!
        </div>

        <div>
          <button type="button" class="btn btn-primary">Primary</button>
          <button type="button" class="btn btn-secondary">Secondary</button>
          <button type="button" class="btn btn-success">Success</button>
          <button type="button" class="btn btn-danger">Danger</button>
          <button type="button" class="btn btn-warning">Warning</button>
          <button type="button" class="btn btn-info">Info</button>
          <button type="button" class="btn btn-light">Light</button>
          <button type="button" class="btn btn-dark">Dark</button>
          <button type="button" class="btn btn-link">Link</button>
        </div> */}

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

      </div>
    );
  }
}

export default App;
