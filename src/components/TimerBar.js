import React from 'react';

class Timer extends React.Component {
  constructor() {
    super();

    this.state = {
      seconds: 30,
    }
  }

  componentWillUnmount() {
    const { seconds } = this.state;
    
    if (seconds === 0) {
      console.log(seconds)
      clearInterval(this.myInterval)
    }
  }

  componentDidMount() {
    const { seconds } = this.state;
    const interval = 1000;
    if (seconds > 1) {
      this.myInterval = setInterval(() => {
        this.setState(({ seconds }) => ({
          seconds: seconds > 1 ? seconds - 1 : 0,
        }));
      }, interval);
    }
  }

  render() {
    const { seconds } = this.state;
    console.log(seconds);
    return(
      <div>
          <p className="timer">{seconds}</p>
      </div>
    );
  }
}

export default Timer;
