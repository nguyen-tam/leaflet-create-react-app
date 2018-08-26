import React, { Component } from 'react';
import Leaflet from 'leaflet';
import SimpleExample from './simple'
// import logo from './logo.svg';
import './App.css';
import '../node_modules/leaflet/dist/leaflet.css';

class App extends Component {
  render() {
    return (
      <div>        
        <SimpleExample />
      </div>
    );
  }
}

export default App;
