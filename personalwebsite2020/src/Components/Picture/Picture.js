import React from 'react';
import './Picture.css'

function Picture(props) {
    return (
      <div>
        <img src={props.src} alt="Failed to Load" className="img-responsive"/>
      </div>
    );
  }
  
  export default Picture;
  