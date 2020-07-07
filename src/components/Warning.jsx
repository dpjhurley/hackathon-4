import React from 'react';
import { Alert } from 'reactstrap';



const Warning = ({ code }) => {
    const warningCodes = {
        '01' : 'No flights on this route!',
        '02' : 'No more search results avaliable!',
    }

    return (
        <Alert color="warning" className="text-center">
            <strong>{warningCodes[code]}</strong>
        </Alert>  
    );
}
 
export default Warning;

                