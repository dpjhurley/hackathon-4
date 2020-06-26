import React, { Fragment } from 'react';


const SearchBar = ({
    handleChangeArrival,
    handleChangeDepart,
    handleClick
}) =>{
    return (
        <>
        <label>DEPARTURE</label>
        <select name="departure" onChange={handleChangeArrival} className="form-control" id="exampleFormControlSelect1">
            <option value="PRG">Prague</option>
            <option value="VLC">Berlin</option>
            <option value="VLC">Warsaw</option>
            <option value="VLC">Pardubice</option>
        </select>
        <label>ARRIVALS</label>
        <select name="departure" onChange={handleChangeDepart} className="form-control" id="exampleFormControlSelect1">
            <option value="VLC">Valentia</option>
            <option value="VLC">Barcelona</option>
            <option value="VLC">Madrid</option>
            <option value="VLC">Milano</option>
            <option value="VLC">Athens</option>
        </select>
            <div className="text-center my-3">
        <button type="submit" onClick={handleClick} className="btn btn-primary mb-2 center w-100">Search</button>
        </div>
      </>
    );
    
};


export default SearchBar;