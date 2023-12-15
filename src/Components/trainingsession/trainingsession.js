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

    // компонент жизненного цикла
    componentDidMount() {
        this.startTimer(); // Запускает таймер при монтировании компонента
        document.addEventListener('keydown', this.handleKeyPress); // слушает ивенты нажатия клавиш
    }

    // компонент жизненного цикла
    componentWillUnmount() {
        this.stopTimer(); // Останавливает таймер перед размонтированием компонента
        document.removeEventListener('keydown', this.handleKeyPress); // убрать слушатель событий нажатия клавиш
    }

    // метод получающий событие
    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.toggleTimer(); // переключить таймер при нажатии на клавишу ENTER
        } else if (event.key === 'Escape') {
            this.resetTimer(); // сбросить таймер при нажатии на клавишу ESC
        }
    };


    //переключает между запуском и остановкой таймера
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
        }, 1000); // Запускает интервал таймера, обновляя timerSeconds каждую секунду.
        this.setState({ timerRunning: true });
    };

    stopTimer = () => {
        clearInterval(this.timer); //останавливает интервал таймера
        this.timer = null; // очищает таймер
        this.setState({ timerRunning: false }); // устанавливает состояние на false
    };

    resetTimer = () => { 
        this.stopTimer(); //остановить таймер при сбросе
        this.setState({ timerSeconds: 30 }); //установить timerSeconds 30с
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