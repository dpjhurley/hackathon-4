import React from 'react';

const Today = () => {
    let today = new Date()
    const d = String(today.getDate()).padStart(2, '0');
    const m = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const y = today.getFullYear();
    today = `${y}-${m}-${d}`;

    return (
        today
    )
} 

export default Today;