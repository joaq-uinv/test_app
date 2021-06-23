import React from "react";
import ListItem from "@material-ui/core/ListItem";
import useStyles from "../Flight/styles";

const Flight = ({ origin, destination }) => {
  const classes = useStyles();

  return (
    <ListItem alignItems="center" className={classes.root}>
      De {origin} a {destination}
    </ListItem>
  );
};

export default Flight;
