import React, { useState, useEffect } from 'react';
import Flights from './components/Flights.jsx';
import Spinner from './components/Spinner.jsx';
import SearchBar from './components/SearchBar.jsx';

import { Alert } from 'reactstrap';

const fetchUrl = (
        from,
        to,
        dateFrom = '27/06/2020',
        dateTo = '28/06/2020',
        nrOfResults = 5
    ) => {
    return `https://api.skypicker.com/flights?flyFrom=${from}&to=${to}&dateFrom=${dateFrom}&dateTo=${dateTo}&limit=${nrOfResults}&partner=picky&v=3`
} 

const App  = () => {
    const [ searchResults, setSearchResults ] = useState([]);
    const [ departLocation, setDepartLocation ] = useState('PRG');
    const [ arrivalLocation, setArrivalLocation ] = useState('VLC');
    const [ loading, setLoading ] = useState(true);


    useEffect (() => {
        getFlights(departLocation, arrivalLocation); 
    }, [])

    const handleClick = () => {
        setLoading(true);
        getFlights(departLocation, arrivalLocation); 
    }

    const handleChangeArrival = (e) => {
        setArrivalLocation(e.target.value);
    }

    const handleChangeDepart = (e) => {
        setDepartLocation(e.target.value);
    }

    const getFlights = async (from, to) => {
        const url = `https://api.skypicker.com/flights?flyFrom=${from}&to=${to}&dateFrom=27/06/2020&dateTo=28/06/2020&limit=5&partner=picky&v=3`
        const resp = await fetch(url);
        const results = await resp.json();
        setLoading(false);
        console.log('hello', results.data.length)
        setSearchResults(results.data);       
    };

    return ( 
       <>
            <SearchBar 
                handleClick={handleClick} 
                handleChangeArrival={handleChangeArrival}
                handleChangeDepart={handleChangeDepart}
                departLocation={departLocation}
                arrivalLocation={arrivalLocation}
            />
            {(loading) ? (
                 <Spinner />
            ) : (
            (searchResults.length) ? (
                    <>
                        {searchResults.map((f) => (
                            <Flights
                                flights={f}
                                key={f.id}
                            />
                        ))}
                    </>
                ) : (
                    <Alert color="warning" className="text-center">
                        <strong>This is a warning alert — no search results avaliable!</strong>
                    </Alert>
                )
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


// {(searchResults.length) ? (
//     (searchResults == -1) ? (
//         <p>no search results avaliavle</p>
//     ) : (
//      <>
//          {searchResults.map((f) => (
//              <Flights
//                  flights={f}
//                  key={f.id}
//              />
//          ))}
//      </>
//     )
//  ) : (
//      <Spinner />
//  )}