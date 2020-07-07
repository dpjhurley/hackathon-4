import React from 'react';
import './searchBar.scss';


const SearchBar = ({
    handleChangeArrival,
    handleChangeDepart,
    handleFromDate,
    fromDate,
    toDate,
    handleToDate,
    handleClick,
    arrivalLocation,
    departLocation,
    handleDirectFlight,
    direct
}) =>{
    return (
        <>
        <div className="d-flex">
            <div className="input-group mr-1 mb-3 w-20">
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">DEPARTURE</label>
                </div>
                <select className="custom-select" id="inputGroupSelect01" name="departure" onChange={handleChangeDepart} value={departLocation}>
                    <option value="" > - </option>
                    <option value="PRG" >Prague</option>
                    <option value="SXF" >Berlin</option>
                    <option value="WAW" >Warsaw</option>
                    <option value="PED">Pardubice</option>
                </select>
            </div>
            <div className="input-group mr-1 mb-3 w-20">
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">ARRIVALS</label>
                </div>
                <select className="custom-select" id="inputGroupSelect01" name="arrival" onChange={handleChangeArrival} value={arrivalLocation}>
                    <option value="" > - </option>
                    <option value="VLC">Valencia</option>
                    <option value="BCN">Barcelona</option>
                    <option value="MAD">Madrid</option>
                    <option value="MIL">Milano</option>
                    <option value="ATH">Athens</option>
                </select>
            </div>
            <div className="input-group mr-1 mb-3 w-20">
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">From</label>
                </div>
                <input className="custom-select" id="inputGroupSelect01" type="date" onChange={handleFromDate} value={fromDate}/>
            </div>
            <div className="input-group mb-3 w-20">
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">To</label>
                </div>
                <input className="custom-select" id="inputGroupSelect01" type="date" onChange={handleToDate} value={toDate}/>
            </div>
        </div>

        <div className="d-flex  justify-content-between text-center my-3">
            <div>
                <input id="direct" type="checkbox" value={direct} onClick={handleDirectFlight}/>
                <label htmlFor="direct">Only Direct Flights</label>   
            </div>       
            <button type="submit" onClick={handleClick} className="subtmitBtn btn btn-primary mb-2 w-80">Search</button>
        </div>
      </>
    );
    
};


export default SearchBar;