import React, { useState, useEffect } from 'react';
import Flights from './components/Flights.jsx';
import Spinner from './components/Spinner.jsx';
import SearchBar from './components/SearchBar.jsx';

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


    useEffect (() => {
        getFlights(departLocation, arrivalLocation); 
    }, [])

    const handleClick = () => {
        setSearchResults([]);
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
        console.log('hello', results.data.length)
        if (results.data.length) {
            setSearchResults(results.data);
        } else {
            setSearchResults(-1)
        }
       
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
            
            {(searchResults.length) ? (
                (searchResults == -1) ? (
                    <p>no search results avaliavle</p>
                ) : (
                <>
                    {searchResults.map((f) => (
                        <Flights
                            flights={f}
                            key={f.id}
                        />
                    ))}
                </>
                )
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