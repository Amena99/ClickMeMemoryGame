import React from "react";
import "./style.css";


const Score = (props) => (        
    //destructuring is used to pass the two props
    <div className="scoreDisplay" id="scoreDisplay">
        <p style={props.style}>Score:{props.score}</p>
    </div>
     
)


export default Score;