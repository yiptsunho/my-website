import React from 'react';
import { useState, useEffect } from 'react';
import '../css/Clock.css'

function Clock() {

    var current = new Date()
    const [clock, setClock] = useState(current.toLocaleTimeString('en-US'))

    useEffect(() => {
        const intervalId = setInterval(() => {
            var current = new Date()
            setClock(current.toLocaleTimeString('en-US'))
        }, 500)
        return () => clearInterval(intervalId)
    }, [])

    return (
        <div className="row clock justify-content-end">
            {clock}
        </div>
    )
};

export default Clock;
