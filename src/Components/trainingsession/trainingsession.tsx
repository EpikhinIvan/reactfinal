import React, { Component } from 'react';

interface Props {
  initialTime: number;
  program: string;
}

interface State {
  timerSeconds: number;
  timerRunning: boolean;
}

class TrainingSession extends Component<Props, State> {
  private timer: number | null = null;

  constructor(props: Props) {
    super(props);
    this.state = {
      timerSeconds: props.initialTime,
      timerRunning: false,
    };
  } 

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    this.stopTimer();
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = (event: KeyboardEvent) => {
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
      this.timer = window.setInterval(() => {
        this.setState(prevState => ({ timerSeconds: prevState.timerSeconds - 1 }));
      }, 1000);
      this.setState({ timerRunning: true });
    }
  };

  stopTimer = () => {
    if (this.timer) {
      window.clearInterval(this.timer);
      this.timer = null;
      this.setState({ timerRunning: false });
    }
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
