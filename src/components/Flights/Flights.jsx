import React from 'react';
import { DateTime } from 'luxon';
import './flights.scss'
import giphy from "./img/UnfitCriminalGermanwirehairedpointer-small.gif";
import Czechia from "./img/Czechia.jpg";
import Spain from "./img/Spain.jpg";
import Germany from "./img/Germany.jpg";
import Greece from "./img/Greece.png";
import Italy from "./img/Italy.png";
import Poland from "./img/Poland.jpg";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } 
from 'reactstrap';

  const map = {
    'PRG': Czechia,
    'VLC': Spain,
    'BER': Germany,
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
 
    const flightDuration = (time) => {
      const h = Math.floor(time / 3600);
      const m = (time % 3600) / 60;
      return `${h}h: ${m}m`;
    }

    return ( <div>
        <Card className="d-flex flex-row justify-content-center align-items-center container-sm col-sm-12 my-3 bg-light">
          {/* <div className="d-flex justify-content-around">
          <CardImg top  src={map[flights.cityCodeFrom]} alt="Flag" style={{ width: "30%", height: "150px", margin:"auto"}} />
          <CardImg top  src={giphy} alt="Plane" style={{ width: "30%", height: "200px", margin:"auto"}} />
          <CardImg top  src={map[flights.cityCodeTo]} alt="Flag" style={{ width: "30%", height: "150px", margin:"auto"}} />
          </div> */}
          <CardBody className="card my-2 w-75 p-3 text-center">
              <CardTitle className="h3">From {flights.cityFrom} ({flights.flyFrom}) To {flights.cityTo} ({flights.flyTo}) </CardTitle>
              <ul className="list-group">
                  <li className="list-group-item">
                    Departure time:  {dateFormatted(flights.dTime)} ,
                    Arrival time: {dateFormatted(flights.aTime)} 
                    {Math.floor(flights.duration.total / 3600) > 23 ? <span> +{Math.floor(flights.duration.total / 86400)} days</span> : ''} 
                  </li>
                  <li className="list-group-item">Total flight duration: {flightDuration(flights.duration.total)}</li>
                  <li className="list-group-item">Number of stopovers: {flights.pnr_count}</li>
                </ul>
          </CardBody>
          <div className="d-flex flex-column justify-content-around align-items-center w-25">
            <CardSubtitle className="h4">Price: {flights.price} EURO </CardSubtitle>
            <a href={flights.deep_link} target="blank"><Button>Buy</Button></a>
          </div>
        </Card>
      </div>
    );
  };

export default Flights;

