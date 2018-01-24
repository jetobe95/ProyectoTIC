import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test'

class App extends Component {
  constructor(){
    super();
    this.state={
      nombre:"lukas",
      mensaje:"lukaku es malo",
    }
  }
  changeNombre= (e)=>{
    this.setState({nombre:e.target.value})
    console.log(this.state.nombre);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>{this.state.nombre}</h1>
        <h1>{this.state.mensaje}</h1>
        <input onChange={this.changeNombre.bind(this)}/>
        <Test name={this.state.nombre}/>
      </div>
    );
  }
}

export default App;
