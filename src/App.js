import React, {Component} from 'react';
import logo from './logo.svg';

//styles
import './App.less';
import './App.scss';
import './App.styl';
import styles from './Modules.css';

import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="app-header">
          Piano + React = <span style={{color: 'red'}}>❤</span>
        </h1>
        <div className="app-body">
          <Home/>
        </div>
      </div>
    )
  }
}

export default App;
