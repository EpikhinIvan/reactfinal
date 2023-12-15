import React, { Component } from 'react';

class TrainingSession extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timerSeconds: props.initialTime,
            timerRunning: true,
        };
        this.timer = null;
    }

    componentDidMount() {
        this.startTimer();
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount() {
        this.stopTimer();
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.toggleTimer();
        } else if (event.key === 'Escape') {
            this.resetTimer();
        }
    };

    toggleTimer = () => {
        if (this.state.timerRunning) {
            this.stopTimer();
        } else {
            this.startTimer();
        }
    };

    startTimer = () => {
        this.timer = setInterval(() => {
            this.setState(prevState => ({ timerSeconds: prevState.timerSeconds - 1 }));
        }, 1000);
        this.setState({ timerRunning: true });
    };

    stopTimer = () => {
        clearInterval(this.timer);
        this.timer = null;
        this.setState({ timerRunning: false });
    };

    resetTimer = () => {
        this.stopTimer();
        this.setState({ timerSeconds: 30 });
    };

    render() {
        const { timerSeconds } = this.state;

        return (
            <div className="training-session">
                <h2>Тренировка</h2>
                <p>Оставшееся время: {timerSeconds} сек</p>
            </div>
        );
    }
}
export default TrainingSession;