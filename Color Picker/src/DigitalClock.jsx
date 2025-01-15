import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


function DigitalClock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        console.log("add");

        
        return () => {
            clearInterval(intervalId);
            console.log("remove");
        }
    },[])


    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();

        return `${hours}:${minutes}:${seconds}`;
    }

  return (
    <div className="clock-container">
        <div className="clock">
            <span> {formatTime()} </span>

        </div>
    </div>
  )
}

export default DigitalClock