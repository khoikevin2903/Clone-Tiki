import React from 'react';
import useClock from '../../hooks/useClock';

function Clock(props) {

    const {timeString} = useClock();

    return (
        <p style={{ fontSize: '12px' }}>{timeString}</p>
    );
}

export default Clock;