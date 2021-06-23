import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFlight } from "../../redux/slice";
import { Grid, FormControl, TextField, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles";

const Form = () => {
  const [locations, setLocations] = useState({
    origin: "",
    destination: "",
  });
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleChange = (e) =>
    setLocations({ ...locations, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addFlight({
        origin: locations.origin,
        destination: locations.destination,
      })
    );
    setLocations({ origin: "", destination: "" });
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.container}
    >
      <FormControl>
        <TextField
          type="text"
          label="Origen"
          name="origin"
          className={classes.input}
          value={locations.origin}
          onChange={handleChange}
          required={true}
        />
      </FormControl>
      <FormControl>
        <TextField
          type="text"
          label="Destino"
          name="destination"
          className={classes.input}
          value={locations.destination}
          onChange={handleChange}
          required={true}
        />
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<SearchIcon />}
        onClick={handleSubmit}
      >
        Buscar
      </Button>
    </Grid>
  );
};

export default Form;
