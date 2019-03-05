import React from "react";
// import GameContainer from "./GameContainer";


class ImageButton extends React.Component {
    
    state={
        clicked: false
    }

    handleClick = () => {
        
        if(this.state.clicked === true){
            console.log("double click");
            this.props.calculateTopScore();
        }else{
            console.log("First time click");
            this.props.incrementScore();
            this.setState({
                clicked: true
            })
        }
    }
    resetClickedState = () => {
        this.setState({
            clicked: false
        });
    };
    render(){
        return(
            <div>
                <img src="./assets/images/kawaii.jpg"
                onClick={this.handleClick}
                alt="insect"
                />
            </div> 
        )
    }
}

export default ImageButton;