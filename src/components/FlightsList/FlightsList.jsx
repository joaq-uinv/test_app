import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import List from "@material-ui/core/List";
import { getFlights } from "../../redux/slice";
import Flight from "../Flight/Flight";

const FlightsList = () => {
  const flights = useSelector((state) => state.flights.flights); //first flight is the store flight, and the second one, the slice flight
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlights());
  }, [dispatch]);

  return (
    <List>
      {flights.map((flight) => (
        <Flight
          key={flight.id}
          origin={flight.origin}
          destination={flight.destination}
        />
      ))}
    </List>
  );
};

export default FlightsList;
