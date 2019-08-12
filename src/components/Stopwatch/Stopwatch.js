import Radium from 'radium';
import React from 'react';

import classes from './Stopwatch.module.css'

const stopwatch = (props) => {
    const styles = {
        buttonSuccess: {
            backgroundColor: ' rgb(42, 88, 42)',
            ':hover': {
                backgroundColor: 'green'
            },
            buttonSuccessActive: {
                backgroundColor: 'blue'
            }

        },
        buttonDanger: {
            ':hover': {
                backgroundColor: 'red'
            }
        },
        buttonReset: {
            ':hover': {
                backgroundColor: 'rgb(114, 79, 13)'
            }
        }
    }

    let activeSuccess = props.timeData.seconds > 0 && !props.stopState
    return <div className={classes.Stopwatch}>
        <p
            onClick={props.timeData.startStopper}>
            {props.timeData.hours} : {props.timeData.mins} : {props.timeData.seconds}
        </p>

        <button
            key='success'
            style={activeSuccess ? [styles.buttonSuccess, styles.buttonSuccess.buttonSuccessActive] : styles.buttonSuccess}
            onClick={props.startStopper}>
            {props.stopState && props.timeData.seconds > 0 ? 'Continue' : props.displayTime > 0 && !props.stopState ? 'Counting...' : 'Start'}
        </button>
        <button
            key='danger'
            style={styles.buttonDanger}
            className={classes.Danger}
            onClick={props.stopStopper}>
            Stop
            </button>
        <button
            key='reset'
            style={styles.buttonReset}
            className={classes.Reset}
            onClick={props.resetTimer}>
            Reset
            </button>
        <label className={classes.label} > <input
            className={props.stopState || props.timeData.seconds === 0
                ? classes.input : classes.active}
            type='checkbox'
            checked={!props.stopState && props.timeData.seconds > 0} />
            

        </label>

    </div>
};


export default Radium(stopwatch);