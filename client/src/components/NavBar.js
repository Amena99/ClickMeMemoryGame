import React from "react";
import "./style.css";

function NavBar(props) {
  return (
      <nav className="navbar fixed-top">
        <div className="container-fluid">
            
                <div className="col-md-4"></div>
                <div className="col-md-4"> <span className="title">{props.title}</span></div>
                <div className="col-md-4 scores" >
                <p className="scoreDisplay">Score:  {props.score}</p>
                <p className="topscoreDisplay">Top Score:  {props.topscore}</p>
                </div>

                </div>
           
        
    </nav>
  )
    
}

export default NavBar;