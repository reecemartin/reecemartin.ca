import React from 'react';
import './Picture.css'

function Picture(props) {
    return (
      <div>
        <img src={props.src} alt="Failed to Load" width={props.width} height={props.height}/>
      </div>
    );
  }
  
  export default Picture;
  