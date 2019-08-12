import React from 'react';

import classes from './ActiveStop.module.css'

const activeStop = (props) => (
    <div className={classes.ActiveStop}>
        <h1>Active Stoppers - <label>{props.activeStop}</label> </h1>
    </div>

)


export default activeStop;