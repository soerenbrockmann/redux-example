import React, { Component } from 'react';
import Header from '../../containers/header/Header';
import WelcomeMessage from '../../containers/welcomeMessage/WelcomeMessage';
import NameInput from '../../containers/nameInput/NameInput';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div class='container'>
          <div class='row'>
            <Header />
          </div>
          <div class='row'>
            <WelcomeMessage />
          </div>
          <div class='row'>
            <NameInput />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
