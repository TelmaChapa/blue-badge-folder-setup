import React, { useState, useEffect } from 'react';

const getTimerString = () => {
    const date = new Date(Date.now()).toLocaleTimeString();
    return date;
}

const ClockApp = () => {
    const [time, setTime] = useState(getTimerString());


    useEffect(() => {
        const interval = setInterval(() => {
            let date = getTimerString();
            setTime(date);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1 className="section-title"> React Clock</h1>
            <hr className="explanation" />
            <p>{time}</p>
        </div>
    );
};



export default ClockApp;