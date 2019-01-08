import React, { Component } from 'react';
import './App.scss';

import Routes from './Routes';


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

        
      <Routes />
      </div>
    );
  }
}

export default App;
