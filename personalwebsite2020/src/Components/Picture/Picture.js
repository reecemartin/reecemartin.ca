import React from 'react';
import './Picture.css'

function Picture(props) {
    return (
      <div>
        <img src={props.src} alt="Failed to Load" width={props.width} height={props.height} className={props.radius} style={{boxShadow:props.imageShadowOffsetX + " " + props.imageShadowOffsetY + " " + props.imageShadowColor}}/>
        <p>{props.text}</p>
      </div>
    );
  }
  
  export default Picture;
  