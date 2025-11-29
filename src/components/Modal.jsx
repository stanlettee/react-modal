import { Component } from "react";
import './Modal.css';

export default class Modal extends Component {
    state = {
        seconds: 0,
        paused: false
    }

    stopTimer = () => {
        clearInterval(this.interval);
    };

    componentWillUnmount () {
        this.setState({ paused: true });
    }

    render() {
        if (!this.props.isOpened) return null;

        return (
        <>
            <div className="backdrop" onClick={this.props.closeModal}></div>
            <div className="modal">
            <h2 className="title">You have opened a modal window</h2>
            <p>Timer: ${this.state.seconds}</p>
            <button onClick={this.props.closeModal}>Close</button>
            </div>
        </>
        );
    }

  componentDidMount() {
    if (this.state.paused === false) {
        this.interval = setInterval(() => {
            this.setState(prevState => ({
                seconds: prevState.seconds + 1
            }));
        }, 1000)
    }
  }
}

