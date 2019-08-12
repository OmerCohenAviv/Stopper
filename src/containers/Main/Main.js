import React, { Component } from 'react';
import Radium from 'radium'

import Check from './Check/Check';
import ActiveStop from '../../components/Stopwatch/ActiveStop/ActiveStop';



class Main extends Component {
    state = {
        workingStopWatches: 0,
        resetAll: false,
    }
    // reset is false (happens after resetAll has been initated)
    componentDidUpdate() {
        if (this.state.resetAll === true)
            this.afterReset()
    }
    //resetAll -> False
    afterReset = () => {
        this.setState({ resetAll: false })
    }
    // reset all watches.
    resetEverythingHandler = () => {
        this.setState({ resetAll: true, workingStopWatches: 0 })
    }
    //Checking if the watch is activated.
    checkingActiveHandler = (stop) => {
        console.log(stop)
        let activeStop = this.state.workingStopWatches
        if (!stop) {
            activeStop = activeStop + 1;
            this.setState({ workingStopWatches: activeStop })
        }
        if (stop && this.state.workingStopWatches !== 0) {
            activeStop = activeStop - 1;
            this.setState({ workingStopWatches: activeStop })
        }
        else {
            return
        }
    }
    render() {
        const styles = {
            resetButton: {
                border: 'none',
                width: '200px',
                padding: '20px',
                color: 'black',
                margin: '45px',
                backgroundColor: 'red',
                ':hover': {
                    color: 'white',

                }
            }
        }
        let watches = []
        for (let i = 0; i < 4; i++) {
            watches.push(
                <Check
                    key = {i}
                    checkActive={(stopState) => this.checkingActiveHandler(stopState)}
                    shouldReset={this.state.resetAll} />)
        }
        return (
            <div>
                <ActiveStop activeStop={this.state.workingStopWatches} />
                {watches}
                <button 
                onClick={this.resetEverythingHandler}
                style={styles.resetButton}>Reset Everyting!</button>
            </div >
        );
    };
};


export default Radium(Main)







