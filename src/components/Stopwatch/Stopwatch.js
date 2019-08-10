import React from 'react';


const stopwatch = (props) => {
    return <div >
        <p>
            <button onClick={props.start}>Start/Continue</button>
            <button onClick={props.stopTimer}>Stop</button>
        </p>
        <p onClick={props.start}>  {props.hour}/{props.mins}/{props.seconds}</p>
    </div>
};


export default stopwatch;