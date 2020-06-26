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
        <select name="departure" onChange={handleChangeDepart} value={departLocation}>
            <option value="PRG" >Prague</option>
            <option value="SXF" >Berlin</option>
            <option value="WAW" >Warsaw</option>
            <option value="PED">Pardubice</option>
        </select>
        <label>ARRIVALS</label>
        <select name="arrival" onChange={handleChangeArrival} value={arrivalLocation}>
            <option value="VLC">Valencia</option>
            <option value="BCN">Barcelona</option>
            <option value="MAD">Madrid</option>
            <option value="MIL">Milano</option>
            <option value="ATH">Athens</option>
        </select>

        <button type="submit" onClick={handleClick}>Search</button>
      </>
    );
    
};


export default SearchBar;