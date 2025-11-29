import './App.css';
import { Component } from 'react';
import Modal from './components/Modal';

export default class App extends Component {
  state = {
    isOpened: false,
    paused: true
  }

  openModal = () => {
    this.setState({ isOpened: true, paused: false })
  }

  closeModal = () => {
    this.setState({ isOpened: false, paused: true });
    
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.openModal} className="button">Open Modal</button>
        <Modal isOpened={this.state.isOpened} closeModal={this.closeModal} paused={this.state.paused} />
      </div>
    );
  }
}