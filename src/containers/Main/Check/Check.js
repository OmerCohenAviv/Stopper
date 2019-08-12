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
    }
    componentDidMount() {
        this.setState({ didReset: false, })
    }
    componentDidUpdate() {

    }
    componentWillReceiveProps() {
        if (this.props.shouldReset) {
            return this.resetAll()
        }
    }
    //Starting Handler -> isStopped - False, initing startingTime
    startingHandler = () => {
        clearInterval(this.state.intervalId)
        this.setState({isStopped: false})
        let currentTime = Math.floor(Date.now() / 1000)
        this.setState({ startingTime: currentTime, didReset: false, intervalId: null}, () => this.props.checkActive(this.state.isStopped),
            this.timeCounterHandler(currentTime - this.state.timeCounter))
    }
    //timeCounterHandler -> timeCounter - startingTime = counter.
    timeCounterHandler = (startingTime) => {
        let counter = 0;
        let intervalId = null
        intervalId = setInterval(() => {
            if (!this.state.isStopped) {
                counter = Math.floor(Date.now() / 1000) - startingTime
                this.setState({ timeCounter: counter, intervalId: intervalId }, () => this.handlingTime(counter))
            }
            else {
            }

        }, 1000)
        clearInterval(this.state.intervalId)

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
        clearInterval(this.state.intervalId)
        this.setState({ isStopped: true, intervalId: null}, () => this.props.checkActive(this.state.isStopped))
    }
    resetOne = () => {
        clearInterval(this.state.intervalId)
        this.setState({
            timeSplit: {
                seconds: 0,
                mins: 0,
                hours: 0
            },
            isStopped: true,
            timeCounter: 0,
            startingTime: 0,
            intervalId: null,
            displayTime: 0
        }, () => this.props.checkActive(this.state.isStopped))
    }
    resetAll = () => {
        clearInterval(this.state.intervalId)
        let updateTime = { ...this.state.timeSplit, seconds: 0, mins: 0, hours: 0 }
        let updateState = { ...this.state, timeSplit: updateTime, isStopped: true, intervalId: null, timeCounter: 0, startingTime: 0, didReset: true }
        this.setState({ ...updateState })
    }

    render() {
        
        return (
            <Stopwatch
                checkActiveWatch={this.props.checkActive}
                resetTimer={this.resetOne}
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