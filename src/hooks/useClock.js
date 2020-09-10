
import { useState, useEffect } from 'react';


function formatDate(date){
    
  const hours = `0${date.getHours()}`.slice(-2);
  const minute =`0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);

    return `${hours}:${minute}:${seconds}`;
}

function useClock(props) {
    const [timeString, setTimeString] = useState('');

    useEffect(() => {
        const ClockInterval = setInterval(() => {
            const now = new Date();
            const newTimeString = formatDate(now);

            setTimeString(newTimeString);
        }, 1000);

        return () => {
            //clean up
            clearInterval(ClockInterval);
        }
    }, [])

    return {timeString};
}

export default useClock;