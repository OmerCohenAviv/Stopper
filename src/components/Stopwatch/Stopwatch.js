import React from 'react';
import classes from './Stopwatch.module.css'

const stopwatch = (props) => {
    return <div className={classes.Stopwatch}>
        <p
            onClick={props.start}>
            {props.hour} : {props.mins} : {props.seconds}
        </p>

        <button
            className={classes.Success}
            onClick={props.start}>
            {props.stopState && props.seconds > 0 ? 'Continue' : 'Start'}
        </button>
        <button
            className={classes.Danger}
            onClick={props.stopTimer}>
            Stop
            </button>
        <button
            className={classes.Reset}
            onClick={props.resetTimer}>
            Reset
            </button>
    </div>
};


export default stopwatch;