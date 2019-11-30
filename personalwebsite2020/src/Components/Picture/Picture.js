// Dependencies
import React from "react";

function Picture(props) {
  return !Array.isArray(props.src) ? (
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
  ) : (
    <div>
      {" "}
      {props.src.map((value, index) => {
        return !Array.isArray(props.src) ? (
          <div>
            <img
              src={props.src[index]}
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
        ) : (
          <div>
            <img
              src={props.src[index][0]}
              alt="Failed to Load"
              width={props.src[index][1]}
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
      })}{" "}
    </div>
  );
}

export default Picture;
