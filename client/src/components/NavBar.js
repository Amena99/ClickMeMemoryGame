import React from "react";
import "./style.css";

function NavBar(props) {
  return (
      <nav className="navbar fixed-top">
        <div className="container-fluid">
            
                <div className="col-md-3">
                  <img src={props.iconimage} alt="avengers icon"></img>
                </div>
                <div className="col-md-6"> 
                  <p className="title" id="title">{props.title}</p>
                  <span className="subtitle" id="directions">{props.directions}</span>
                </div>
                <div className="col-md-3 scores" >
                <p className="scoreDisplay">Score:  {props.score}</p>
                <p className="topscoreDisplay">Top Score:  {props.topscore}</p>
                </div>

                </div>
           
        
    </nav>
  )
    
}

export default NavBar;