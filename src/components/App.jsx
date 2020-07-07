import React, { useState, useEffect } from 'react';
import Flights from './Flights/Flights.jsx';
import Spinner from './Spinner/Spinner.jsx';
import Header from './Header/Header.jsx';
import SearchBar from './SearchBar/SearchBar.jsx';
import LoadMoreBtn from './loadMoreBtn.jsx';
import Warning from './Warning.jsx';
// import Tomorrow from './Partials/Tomorrow.jsx';
// import Today from './Partials/Today.jsx';

let today = new Date()
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();
today = `${yyyy}-${mm}-${dd}`;

let tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)
const d = String(tomorrow.getDate()).padStart(2, '0');
const m = String(tomorrow.getMonth() + 1).padStart(2, '0'); //January is 0!
const y = tomorrow.getFullYear();
tomorrow = `${y}-${m}-${d}`


const App  = () => {
    const [ searchResults, setSearchResults ] = useState([]);
    const [ departLocation, setDepartLocation ] = useState('');
    const [ arrivalLocation, setArrivalLocation ] = useState('');
    const [ fromDate, setFromDate ] = useState(today);
    const [ toDate, setToDate ] = useState(tomorrow);    
    const [ loading, setLoading ] = useState(true);
    const [ moreResultsLoading, setmoreResultsLoading ] = useState(false);
    const [ direct, setDirect ] = useState(false)
    const [nrOfResults, setNrOfResults] = useState(5);

    useEffect (() => {
        getFlights(departLocation, arrivalLocation, direct); 
    }, [nrOfResults])

    const handleLoadMoreClick = () => {
        setmoreResultsLoading(!moreResultsLoading);
        setNrOfResults(nrOfResults + 5);
    };

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

    const handleFromDate = (e) => {
        console.log(e.value)
    }

    const handleToDate = (e) => {
        
        console.log(e)
    }

    const handleDirectFlight = () => {
        setDirect(!direct)
    }

    const getFlights = async () => {
        const url = `https://api.skypicker.com/flights?flyFrom=${departLocation}&to=${arrivalLocation}&dateFrom=27/06/2020&dateTo=28/06/2020&limit=${nrOfResults}&partner=picky&v=3&direct_flights=${direct}`
        const resp = await fetch(url);
        const results = await resp.json();
        setLoading(false);
        setmoreResultsLoading(false);
        setSearchResults(results.data);       
    };

    return ( 
       <>
            <Header />
            <SearchBar 
                handleClick={handleClick} 
                handleChangeArrival={handleChangeArrival}
                handleChangeDepart={handleChangeDepart}
                handleFromDate={handleFromDate}
                handleToDate={handleToDate}
                departLocation={departLocation}
                arrivalLocation={arrivalLocation}
                fromDate={fromDate}
                toDate={toDate}
                handleDirectFlight={handleDirectFlight}
                direct={direct}
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
                    <Warning 
                     code='01'
                    />
                )
            )}
            <LoadMoreBtn
                nrOfResults={nrOfResults}
                searchResults={searchResults}
                handleLoadMoreClick={handleLoadMoreClick}
                moreResultsLoading={moreResultsLoading}
            />
            
       </>
    );
  }
   
  export default App;