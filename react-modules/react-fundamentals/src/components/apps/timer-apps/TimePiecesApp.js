import React from 'react';
import TimerApp from './TimerApp';
import ClockApp from './ClockApp';
import StopWatch from './StopWatchApp';

const TimePiecesApp = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                <TimerApp />
                <hr />
                <ClockApp />
                <hr />
                <StopWatch />
            </div>
        </div>
    );
};

export default TimePiecesApp;
