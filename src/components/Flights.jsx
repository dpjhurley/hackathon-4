import React from 'react';
import { DateTime } from 'luxon';

const Flights = ({ flights }) => {

    const dateFormatted = (time) => {
        return DateTime.fromMillis(time * 1000).toFormat('hh:mm');
    }

    return (
        <div>
            <ul>
                <li>Departing from: {flights.cityFrom} ({flights.flyFrom})</li>
                <li>Destination: {flights.cityTo} ({flights.flyTo})</li>
                <li>Price (Euros): {flights.price}</li>
                <li>Departure time: {dateFormatted(flights.dTime)}</li>
                <li>Arrival time: {dateFormatted(flights.aTime)}</li>
            </ul>
            
        </div>
    )
}

export default Flights;