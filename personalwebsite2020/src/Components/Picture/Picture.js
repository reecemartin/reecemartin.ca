import React from 'react';
import './Picture.css'

function Picture(props) {
    return (
      <div>
        <img src={props.src} alt="Failed to Load" width={props.width} height={props.height} className={props.radius}/>
        <p>{props.text}</p>
      </div>
    );
  }
  
  export default Picture;
  