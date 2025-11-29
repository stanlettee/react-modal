import { Component } from "react";
import './Modal.css';

export default class Modal extends Component {
    state = {
        seconds: 0,
    }

    componentWillUnmount () {
        clearInterval(this.interval);
    }

    startTimer = () => {
        this.interval = setInterval(() => {
            this.setState(prevState => ({
                seconds: prevState.seconds + 1
            }));
        }, 1000)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.paused !== this.props.paused) {
            if (this.props.paused === false) {
                this.startTimer();
            } else {
                clearInterval(this.interval);
            }
        }
    }

    render() {
        if (this.props.isOpened === false) return null;

        return (
        <>
            <div className="backdrop" onClick={this.props.closeModal}></div>
            <div className="modal">
            <h2 className="title">You have opened a modal window</h2>
            <p>Timer: {this.state.seconds} seconds</p>
            <button onClick={this.props.closeModal}>Close</button>
            </div>
        </>
        );
    }

  componentDidMount() {
    if (this.props.paused === false) {
       this.startTimer()
    }
}
}

