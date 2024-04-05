import React, { Component } from 'react';

class TrainingSession extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerSeconds: props.initialTime,
      timerRunning: false,
    };
    this.timer = null;
  }

  componentDidMount() {
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
    if (!this.state.timerRunning) {
      this.timer = setInterval(() => {
        this.setState(prevState => ({ timerSeconds: prevState.timerSeconds - 1 }));
      }, 1000);
      this.setState({ timerRunning: true });
    }
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.timer = null;
    this.setState({ timerRunning: false });
  };

  resetTimer = () => {
    this.stopTimer();
    this.setState({ timerSeconds: this.props.initialTime });
  };

  render() {
    const { timerSeconds } = this.state;
    const { program } = this.props;

    return (
      <div className="training-session">
        <h2>Тренировка</h2>
        <p>{program}</p>
        <p>Оставшееся время: {timerSeconds} сек</p>
        <button className='button' onClick={this.toggleTimer}>
          {this.state.timerRunning ? 'Пауза' : 'Старт'}
        </button>
        <button className='button' onClick={this.resetTimer}>Сброс</button>
      </div> 
    );
  }
}

export default TrainingSession;
