import React, { Component } from "react";
import ImageButton from "./ImageButton";
import NavBar from "./NavBar";
import "./style.css";

class GameContainer extends Component {
    state = {
        counters : [0,0,0,0,0,0,0,0,0,0,0,0],
        score: 0,
        topscore: 0,
        topScoresArray:[],
        image: ["./assets/images/blackwidow.jpg", "./assets/images/captainamerica.jpg", "./assets/images/gamora.jpg", "./assets/images/gamora2.jpg", "./assets/images/hulk.jpg", "./assets/images/ironman.jpg", "./assets/images/SpiderMan.jpg", "./assets/images/spiderman2.jpg", "./assets/images/thor.jpg", "./assets/images/vision.jpg", "./assets/images/ironman2.jpg", "./assets/images/hulk2.jpg"]

    }

    copyState(newStateArray, item){
        newStateArray.push(item);
    }

    calculateTopScore(){
        let newTopScore = 0;
        let currentTopScore = this.state.topscore;

        if (currentTopScore <= this.state.score){
            newTopScore = this.state.score;
        
            this.setState({
                topscore: newTopScore

            })
        } 

        let refreshedCounterState = [0,0,0,0,0,0,0,0,0,0,0,0];
        let tempScoresArray = [];
        tempScoresArray = this.state.topScoresArray;
        tempScoresArray.push(newTopScore);
        console.log(tempScoresArray);

        this.setState({
            topScoresArray: tempScoresArray,
            counters: refreshedCounterState,
            score: 0
        })
    }

    handleClick(index){
        let newCounterState = [];
        this.state.counters.map((number) => (this.copyState(newCounterState, number))); //create new array setting each element equal to zero--can create another function that loops through and adds the current value to newCounterState 
        console.log("Logging newCounterState in Game Container:");
        console.log(newCounterState);

        if(newCounterState[index]===0){
    
            newCounterState[index] = this.state.counters[index] + 1; //incremented the count of the given index in param
            // console.log("Logging newCounterState[index] in Game Container:");
            // console.log(newCounterState[index]);
            // console.log("Logging index in Game Container:");
            // console.log(index);
            let currentScore = this.state.score;
            let newScore = currentScore+1;
            // console.log("This is the new score:");
            // console.log(newScore);
            this.shuffleComponents(this.createComponentArray());

            // let imageStateCopy = this.state.image;
            //     console.log("Image State Copy");
            //     console.log(imageStateCopy);
        
            // let shuffledArray = this.shuffleImages(imageStateCopy);


            this.setState(
                {
                    counters : newCounterState,
                    score: newScore
                    
                })
            console.log("Logging scoresArray");
            console.log(this.state.scoresArray);
           
        }else{
            console.log("Double click detected.")
            this.calculateTopScore();
        }
    }

    shuffleComponents(array){
    
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
        }
        return array;
    } 

    createComponentArray() {
        // const newPicsArray = this.state.counters = 
        const pics = this.state.counters.map((value, index) => (
             <ImageButton 
                key={index}
                handleClick={() => this.handleClick(index)}
                counter={value}
                image={this.state.image[index]}
            />   
        ))
        // console.log("logging pics array");
        // console.log(pics);
        this.shuffleComponents(pics)
        // console.log("logging pics array");
        // console.log(pics);

            return pics;
    }

    render() {
        return(
        <div>
            <NavBar
            iconimage="./assets/images/avengers.png"
            title="THE AVENGERS CLICKS GAME"
            directions={"Click on an Avenger to earn points. But don't click on any more than once!"}
            score={this.state.score}
            topscore={this.state.topscore}
            />
            
            <div className="container">
                <div className="row">
                    {this.createComponentArray()}
                </div>
            </div>
        </div>
            
        );
}
};
export default GameContainer;