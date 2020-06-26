import React from 'react';
import { DateTime } from 'luxon';
import giphy from "./UnfitCriminalGermanwirehairedpointer-small.gif";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';


const Flights = ({ flights }) => {

    const dateFormatted = (time) => {
        return DateTime.fromMillis(time * 1000).toFormat('hh:mm');
    }

    return ( <div>
        <Card className="container-sm col-sm-6 my-3 bg-dark" style={{ display: "flex", flexDirection: "column" , alignItems: "center", justifyContent:"center" }}>
          <CardImg top  src={giphy} alt="Plane" style={{ width: "30%", height: "200px", margin:"auto"}} />
          <CardBody className="card">
            <CardTitle>From {flights.cityFrom} ({flights.flyFrom} TO  {flights.cityTo} ({flights.flyTo} </CardTitle>
            <CardSubtitle>Price: {flights.price} EURO </CardSubtitle>
            <CardText>Departure time:{dateFormatted(flights.dTime)} , Arrival time: {dateFormatted(flights.aTime)} </CardText>
            <Button>Buy</Button>
          </CardBody>
        </Card>
      </div>
    );
  };

export default Flights;

