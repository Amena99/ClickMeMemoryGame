import React from "react";
// import GameContainer from "./GameContainer";


const ImageButton = ({counter, handleClick, image}) => (  //destructuring is used to pass the two props
    <div className="card">
        <div className="img-container">
            <span className="col-md-4">
                <img src={image}
                onClick={handleClick}
                alt="insect"
                />
                {counter}
            </span>
        </div>
    </div>
     
)


export default ImageButton;