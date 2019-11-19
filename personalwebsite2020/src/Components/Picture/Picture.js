// Dependencies
import React from "react";

function Picture(props) {
  return (
    <div>
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

export default Picture;
