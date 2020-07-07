import React from 'react';

const Tomorrow = () => {
    let tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    const d = String(tomorrow.getDate()).padStart(2, '0');
    const m = String(tomorrow.getMonth() + 1).padStart(2, '0'); //January is 0!
    const y = tomorrow.getFullYear();
    tomorrow = `${y}-${m}-${d}`
    return (
        tomorrow
    )
} 

export default Tomorrow;
