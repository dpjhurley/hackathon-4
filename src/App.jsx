import React, { useState, useEffect } from 'react';
import Flights from './components/Flights.jsx';
import Spinner from './components/Spinner.jsx';

const url = `https://api.skypicker.com/flights?flyFrom=PRG&to=VLC&dateFrom=27/06/2020&dateTo=28/06/2020&partner=picky&v=3&limit=5`

const App  = () => {
    const [ searchResults, setSearchResults ] = useState([]);

    const getFlights = async () => {
        const resp = await fetch(url);
        const results = await resp.json();
        console.log(results.data);
        setSearchResults(results.data);
    }

    useEffect (() => {
        getFlights(); 
    }, [])
    

    return ( 
       <>
            {(searchResults.length) ? (
                <>
                    {searchResults.map((f) => (
                        <Flights
                            flights={f}
                            key={f.id}
                        />
                    ))}
                </>
            ) : (
                <Spinner />
            )}
       </>
    );
  }
   
  export default App;


//   url = `https://api.skypicker.com/flights?flyFrom=${from}&to=${to}&dateFrom=${dateFrom}&dateTo=${dateTo}&limit=${nrOfResults}`

//   from = PRG
//   to = VLC
//   dateFrom = 27/06/2020
//   dateTo = 28/06/2020 ?
//   nrOfResults = 5