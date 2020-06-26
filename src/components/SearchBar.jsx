import React, { Fragment } from 'react';


const SearchBar = ({
    handleChangeArrival,
    handleChangeDepart,
    handleClick
}) =>{
    return (
        <>
        <label>DEPARTURE</label>
        <select name="departure" onChange={handleChangeArrival}>
            <option value="PRG">Prague</option>
            <option value="VLC">Berlin</option>
            <option value="VLC">Warsaw</option>
            <option value="VLC">Pardubice</option>
        </select>
        <label>ARRIVALS</label>
        <select name="departure" onChange={handleChangeDepart}>
            <option value="VLC">Valentia</option>
            <option value="VLC">Barcelona</option>
            <option value="VLC">Madrid</option>
            <option value="VLC">Milano</option>
            <option value="VLC">Athens</option>
        </select>

        <button type="submit" onClick={handleClick}>Search</button>
      </>
    );
    
};


export default SearchBar;