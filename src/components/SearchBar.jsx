import React, { Fragment } from 'react';


const SearchBar = ({
    handleChangeArrival,
    handleChangeDepart,
    handleClick,
    arrivalLocation,
    departLocation
}) =>{
    return (
        <>
        <label>DEPARTURE</label>
        <select name="departure" onChange={handleChangeDepart} value={departLocation} className="form-control" id="exampleFormControlSelect1">
            <option value="PRG" >Prague</option>
            <option value="SXF" >Berlin</option>
            <option value="WAW" >Warsaw</option>
            <option value="PED">Pardubice</option>
        </select>
        <label>ARRIVALS</label>
        <select name="arrival" onChange={handleChangeArrival} value={arrivalLocation} className="form-control" id="exampleFormControlSelect1">
            <option value="VLC">Valencia</option>
            <option value="BCN">Barcelona</option>
            <option value="MAD">Madrid</option>
            <option value="MIL">Milano</option>
            <option value="ATH">Athens</option>
        </select>
            <div className="text-center my-3">
        <button type="submit" onClick={handleClick} className="btn btn-primary mb-2 center w-100">Search</button>
        </div>
      </>
    );
    
};


export default SearchBar;