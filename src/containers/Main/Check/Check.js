import React, { Component } from 'react';

import Stopwatch from '../../../components/Stopwatch/Stopwatch';

class Check extends Component {
    state = {
        timeSplit: {
            seconds: 0,
            mins: 0,
            hours: 0
        },
        isStopped: false,
        timeCounter: 0,
        startingTime: 0,
        intervalId: null,
        didReset: false,
        workingWatch: 0
    }
    componentDidMount() {
        this.setState({didReset: false,})
    }
    componentWillReceiveProps() {
        if (this.props.shouldReset) {
            return this.resetAll()
        }
    }
    //Starting Handler -> isStopped - False, initing startingTime
    startingHandler = () => {
        console.log('StartingHandler')
        let currentTime = Math.floor(Date.now() / 1000)
        clearInterval(this.state.intervalId)
        this.setState({ startingTime: currentTime, isStopped: false, didReset: false }, this.timeCounterHandler(currentTime - this.state.timeCounter))
    }
    //timeCounterHandler -> timeCounter - startingTime = counter.
    timeCounterHandler = (startingTime) => {
        let counter = 0;
        let intervalId = null

        intervalId = setInterval(() => {
            if (!this.state.isStopped) {
                counter = Math.floor(Date.now() / 1000) - startingTime
            }
            this.setState({ timeCounter: counter, intervalId: intervalId }, this.handlingTime(counter))
        }, 1000)

    }

    handlingTime = (counter) => {
        if (this.state.didReset) {
            return null
        }
        let seconds = counter % 60;
        let mins = this.state.timeSplit.mins;
        let hours = this.state.timeSplit.hours;
        if (this.state.timeCounter !== 0 && seconds % 60 === 0) {
            mins = (mins + 1) % 60;
        }
        if (mins % 60 === 0 && this.state.timeSplit.mins !== 0) {
            hours = hours + 1;
        }

        this.setState({
            timeSplit: {
                seconds: seconds,
                mins: mins,
                hours: hours
            }
        })
    }
    stoppingHandler = () => {
        this.setState({ isStopped: true })
    }
    resetAll = () => {
        console.log('reset')
        clearInterval(this.state.intervalId)
        let updateTime = { ...this.state.timeSplit, seconds: 0, mins: 0, hours: 0 }
        let updateState = { ...this.state, timeSplit: updateTime, isStopped: true, intervalId: null, timeCounter: 0 ,startingTime: 0, didReset: true }
        this.setState({ ...updateState })
    }
    render() {
        return (
            <Stopwatch
                displayTime={this.state.timeCounter}
                stopState={this.state.isStopped}
                startStopper={this.startingHandler}
                stopStopper={this.stoppingHandler}
                timeData={this.state.timeSplit}
            />
        );
    };
};

export default Check;