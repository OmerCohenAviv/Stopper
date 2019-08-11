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

    let activeSuccess = props.seconds > 0 && !props.stopState 
    console.log(activeSuccess)
    return <div className={classes.Stopwatch}>
        <p
            onClick={props.start}>
            {props.hour} : {props.mins} : {props.seconds}
        </p>

        <button
            key='success'
            style={activeSuccess ? [styles.buttonSuccess,styles.buttonSuccess.buttonSuccessActive] : styles.buttonSuccess}
            onClick={props.start}>
            {props.stopState && props.seconds > 0 ? 'Continue' : props.seconds > 0 && !props.stopState ? 'Counting...' : 'Start'}
        </button>
        <button
            key='danger'
            style={styles.buttonDanger}
            className={classes.Danger}
            onClick={props.stopTimer}>
            Stop
            </button>
        <button
            key='reset'
            style={styles.buttonReset}
            className={classes.Reset}
            onClick={props.resetTimer}>
            Reset
            </button>

    </div>
};


export default Radium(stopwatch);