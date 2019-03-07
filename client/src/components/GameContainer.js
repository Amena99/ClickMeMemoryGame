import React, { Component } from "react";
import ImageButton from "./ImageButton";

class GameContainer extends Component {
    constructor(props){
        super(props);
        this.ImageButtonElement = React.createRef();
    }

    state = {
        grid : Array(12).fill(null),
        score: 0,
        topscore: 0
    }

    incrementScore = () => {
        let currentScore = this.state.score;
        console.log("In incrementScore--logging current state.score:")
        console.log(currentScore);
        let newScore = (currentScore+1);
        console.log(newScore);
        this.setState({
            score: newScore
        });
    }
    calculateTopScore = () => {
        let newTopScore = 0;
        let currentTopScore = this.state.topscore;
        if (currentTopScore<this.state.score){
            newTopScore = this.state.score;
            this.setState({
                topscore: newTopScore,
                score: 0
            })
            this.resetAllImgStates();
        }
    }
    
    resetAllImgStates = ()=> {
        this.ImageButtonElement.current.resetClickedState();
    }

    renderImage(){
        return(
            <ImageButton
                incrementScore={this.incrementScore}
                calculateTopScore = {this.calculateTopScore}
                ref={this.ImageButtonElement}
            />
        )
    }

    render(){
        return(
            <div>
                <p>Score: {this.state.score}</p>
                <p>Top Score: {this.state.topscore}</p>
                <div className="grid-row">
                {this.renderImage()}
                {this.renderImage()}
                {this.renderImage()}
                {this.renderImage()}
                </div>
                <div className="grid-row">
                {this.renderImage()}
                {this.renderImage()}
                {this.renderImage()}
                {this.renderImage()}
                </div>
                <div className="grid-row">
                {this.renderImage()}
                {this.renderImage()}
                {this.renderImage()}
                {this.renderImage()}
                </div>
            </div>
        )
    }
}

export default GameContainer;