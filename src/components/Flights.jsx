import React from 'react';
import { DateTime } from 'luxon';
import giphy from "./UnfitCriminalGermanwirehairedpointer-small.gif";
import Czechia from "./Czechia.jpg";
import Spain from "./Spain.jpg";
import Germany from "./Germany.jpg";
import Greece from "./Greece.png";
import Italy from "./Italy.png";
import Poland from "./Poland.jpg";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

  const map = {
    'PRG': Czechia,
    'VLC': Spain,
    'SXF': Germany,
    'WAW': Poland,
    'PED': Czechia,
    'BCN': Spain,
    'MAD': Spain,
    'MIL': Italy,
    'ATH': Greece
  }

const Flights = ({ flights }) => {

    const dateFormatted = (time) => {
        return DateTime.fromMillis(time * 1000).toFormat('hh:mm');
    }
 
    return ( <div>
        <Card className="container-sm col-sm-12 my-3 bg-light" style={{ display: "flex", flexDirection: "column" , alignItems: "center", justifyContent:"center" }}>
          <div className="d-flex justify-content-around">
          <CardImg top  src={map[flights.cityCodeFrom]} alt="Flag" style={{ width: "30%", height: "150px", margin:"auto"}} />
          <CardImg top  src={giphy} alt="Plane" style={{ width: "30%", height: "200px", margin:"auto"}} />
          <CardImg top  src={map[flights.cityCodeTo]} alt="Flag" style={{ width: "30%", height: "150px", margin:"auto"}} />
          </div>
          <CardBody className="card my-2 w-100 p-3">
            <CardTitle className="h2">From {flights.cityFrom} {flights.flyFrom} TO  {flights.cityTo} {flights.flyTo} </CardTitle>
            <CardSubtitle className="h4">Price: {flights.price} EURO </CardSubtitle>
            <CardText className="h5">Departure time:  {dateFormatted(flights.dTime)} , Arrival time: {dateFormatted(flights.aTime)} </CardText>
            <Button >Buy</Button>
          </CardBody>
        </Card>
      </div>
    );
  };

export default Flights;

