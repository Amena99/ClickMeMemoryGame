import React, { Component } from "react";
import ImageButton from "./ImageButton";

class GameContainer extends Component {
    state = {
        counters : [0,0,0,0,0,0,0,0,0,0,0,0],
        score: 0,
        topscore: 0,
        image: ["./assets/images/kawaii.jpg", "./assets/images/cat.jpg", "./assets/images/cutedog.jpg", "./assets/images/deer.jpg", "./assets/images/dog.jpg", "./assets/images/fox.jpg", "./assets/images/goat.jpg", "./assets/images/koala.jpg", "./assets/images/panda.jpg", "./assets/images/pandaheart.jpg", "./assets/images/puppy.jpg", "./assets/images/sheep.jpg"]

    }

    copyState(newStateArray, item){
        newStateArray.push(item);
     }

     calculateTopScore(){
        let newTopScore = 0;
        let currentTopScore = this.state.topscore;
        if (currentTopScore<=this.state.score){
            newTopScore = this.state.score;
            let refreshedCounterState = [0,0,0,0,0,0,0,0,0,0,0,0];
            this.setState({
                topscore: newTopScore,
                score: 0,
                counters: refreshedCounterState
            })
        }
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