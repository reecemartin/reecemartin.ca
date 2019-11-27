// Dependencies
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: "auto",
    marginBottom: "10px"
  }
});

function Card(props) {
  const { classes } = props;
  return (
    <div>
      <Paper
        className={classes.root}
        style={{
          maxWidth: props.maxRelativeWidth
        }}
      >
        <Typography variant="h5" component="h3">
          {props.title}{" "}
        </Typography>{" "}
        <Typography component="p">{props.body} </Typography>{" "}
      </Paper>
    </div>
  );
}

export default withStyles(styles)(Card);
