// Dependencies
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    padding: theme.spacing(3, 2),
    width: "80%",
    margin: "auto"
  }
});

function Picture(props) {
  const { classes } = props;
  return (
    <div>
      {/*<Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your
          application.
        </Typography>
  </Paper>*/}
      <img
        src={props.src}
        alt="Failed to Load"
        width={props.width}
        height={props.height}
        style={{
          boxShadow:
            props.shadowOffsetX +
            " " +
            props.shadowOffsetY +
            " " +
            props.shadowColor,
          borderRadius: props.radius,
          maxWidth: props.maxRelativeWidth,
          paddingTop: props.headroom
        }}
      />{" "}
      <p> {props.text} </p>{" "}
    </div>
  );
}

export default withStyles(styles)(Picture);
