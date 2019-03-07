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
                    score: newScore,
                    // image: shuffledArray
                })
            
                console.log("Logging image state");
                console.log(this.state.image);
           
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
        console.log("logging pics array");
        console.log(pics);
        this.shuffleComponents(pics)
        console.log("logging pics array");
        console.log(pics);

            return pics;
    }

    render() {
        return(
        <div>
            <p>Score: {this.state.score}</p>
            <p>Top Score: {this.state.topscore}</p>
            <div className="row">
                {this.createComponentArray()}
            </div>
        </div>
        );
}
};
export default GameContainer;