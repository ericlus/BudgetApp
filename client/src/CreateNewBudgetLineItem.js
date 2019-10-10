import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  container: {
    display: "center",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing(1)
  }
}));

export default function CreateNewBudgetLineItem(props) {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="bl-name"
        label="Description"
        name="name"
        className={classes.textField}
        value={props.name}
        onChange={props.handleChange}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="bl-expected-spending"
        label="Expected Spending"
        name="spending"
        className={classes.textField}
        value={props.spending}
        onChange={props.handleChange}
        margin="normal"
        variant="outlined"
      />
      <Grid container justify="center">
        <Button
          color="primary"
          onClick={props.handleSubmit}
          className={classes.button}
        >
          Submit
        </Button>
      </Grid>
    </form>
  );
}
