import React, { Component } from 'react';

import Check from './Check/Check';



class Main extends Component {
    state = {
        workingStopWatches: 0,
        resetAll: false
    }
    componentDidUpdate() {
        if (this.state.resetAll === true)
            this.afterReset()
    }
    afterReset = () => {

        this.setState({ resetAll: false })
    }
    resetEverythingHandler = () => {
        this.setState({ resetAll: true })
    }
    render() {
            let stopwatches = [];
            for (let i = 0; i < 4; i++) {
                stopwatches.push(<Check ShouldReset={this.state.resetAll} />)
            }
        return (
            <div>
                <h1>Currently Working Stopwatches - {this.state.workingStopWatches}</h1>
                    {stopwatches}
                <button onClick={this.resetEverythingHandler}>Reset</button>
            </div>
        );
    };
};


export default Main







