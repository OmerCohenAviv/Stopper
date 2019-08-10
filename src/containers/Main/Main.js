import React, { Component } from 'react';

import Stopwatch from '../../components/Stopwatch/Stopwatch';


class Main extends Component {
    state = {
        seconds: 0,
        mins: 0,
        hours: 0,
        startingTime: 0,
        displayTime: 0,
        stop: true,
        start: false
    }
    startingTimeHandler = () => {
        console.log('startingTimeHandler')
        if (this.state.stop) {
            let currentTime = Math.floor(Date.now() / 1000) - this.state.displayTime
            this.setState({ startingTime: currentTime, stop: false, start: true})
            this.displayTime() 
        }
    }

    displayTime = () => {
        console.log('displayTimeHandler')
            setInterval(() => {
                if (!this.state.stop) {
                let displayT = (Math.floor(Date.now() / 1000  ) -  this.state.startingTime )
                this.setState({ displayTime: displayT });
                this.settingTime()
                }
            }, 1000);
        }

    settingTime = () => {
                let time = { ...this.state }
                time.seconds = this.state.displayTime % 60
                if (time.seconds % 60 === 0 && this.state.displayTime > 0  ) {
                    time.mins = time.mins + 1;
                }
                if ((this.state.displayTime / 1000) % 60 === 0 && this.state.displayTime > 0  ) {
                    time.hours = time.hours + 1;
                }
                this.setState({
                    seconds: time.seconds,
                    mins: time.mins,
                    hours: time.hours
                });

     
    }

    stopHandler = () => {
        this.setState({stop: true})
    }
    render() {
        return (
            <div>
                <Stopwatch
                    stopTimer={this.stopHandler}
                    start={this.startingTimeHandler}
                    hour={this.state.hours}
                    mins={this.state.mins}
                    seconds={this.state.seconds}
                />
            </div>
        );
    }
}

export default Main







// {
//     console.log('starting...')
//     lettTime = {
//         ...this.statetTime
//     }
//     for (let i = 0; i < i + 1 || false; i++) {
//        tTime.sec =tTime.sec + 1;         
//         if tTime.sec === 60) {
//            tTime.sec = 0;
//            tTime.min =  1
//         }
//         if tTime.min === 60) {
//            tTime.min = 0;
//            tTime.hour = + 1
//         }
//     }
//     this.setState(tTime:tTime})
// }