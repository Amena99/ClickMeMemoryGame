import React from "react";
import "./style.css";


const ImageButton = ({counter, handleClick, image}) => (        
    //destructuring is used to pass the two props
    <div className="card">
        <img src={image}
        onClick={handleClick}
        alt="insect"
        />
        {counter}
    </div>
     
)


export default ImageButton;