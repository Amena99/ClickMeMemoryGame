import React, { Component } from "react";
import ImageButton from "./ImageButton";
import NavBar from "./NavBar";
import "./style.css";

//Game container contains all game components and logic for the game. 
class GameContainer extends Component {
    
    //State of the Game container contains the counters (used to track which element was clicked), 
    //score, topscore, topscoreArray(to compare topscores to see which topscore is current topscore), 
    //and images that will be rendered in the ImageButton div. 
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

    //Calculate the top score, after comparing all previous top scores
    calculateTopScore(){
     
        let newTopScore = 0;
        let currentTopScore = this.state.topscore;

        //Compare the current score to the top score. If it is greater, then set the top score equal to current score.
        if (currentTopScore <= this.state.score){
            newTopScore = this.state.score;
        
            this.setState({
                topscore: newTopScore

            })
        } 

        //Reset the counters to zeros, and add the new topscore to the TopScores array.
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

    //On click
    handleClick(index){
        
        //Create new array that contains a copy of the counters in state
        let newCounterState = [];
        this.state.counters.map((number) => (this.copyState(newCounterState, number))); 
        console.log("Logging newCounterState in Game Container:");
        console.log(newCounterState);

        //Check the counter at the index of the image clicked. 
        //If index of the image clicked was zero (it was not previously clicked), flash green as the score increments.
        if(newCounterState[index]===0){
            
            function flashtext() {
                let s = document.getElementById("scoreDisplay");
                    s.className +=(" scoreDisplayFlashing"); 
                    let colorBack = () => {
                        s.classList.remove("scoreDisplayFlashing");
                    }
                    setTimeout(colorBack, 500);
                }
            setTimeout(flashtext, 100);
            
            //Incremented the count of the given index 
            newCounterState[index] = this.state.counters[index] + 1; 
            
            //Get new score
            let currentScore = this.state.score;
            let newScore = currentScore+1;
            
            //Shuffle the images
            this.shuffleComponents(this.createComponentArray());

            //Reset the counters(of clicked and unclicked images) 
            //and the score
            this.setState(
                {
                    counters : newCounterState,
                    score: newScore
                    
                })
            console.log("Logging scoresArray");
            console.log(this.state.scoresArray);
           
        }
        //If index of the image was 1 (it was previously clicked), 
        // flash red as top score is set and score goes back to zero
        else{
            console.log("Double click detected.");

            function flashtext() {
                let s = document.getElementById("scoreDisplay");
                s.classList.remove("scoreDisplayFlashing");
                s.className +=(" scoreDisplayFlashingLose"); 
                let colorBack = () => {
                    s.classList.remove("scoreDisplayFlashingLose");
                }
                
                setTimeout(colorBack, 500);
                
            }
            setTimeout(flashtext, 100);
            this.calculateTopScore();
        }
    }

    //Shuffle components by random swap for entire length of array
    shuffleComponents(array){
    
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

        // Pick a random remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
        }
        return array;
    } 

    //Create component array
    createComponentArray() {
        
        //New array of ImageButton components (length equal to number of counters in state) 
        //created where each contains the key of its index. 
        const pics = this.state.counters.map((value, index) => (
             <ImageButton 
                key={index}
                handleClick={() => this.handleClick(index)}
                // counter={value}
                image={this.state.image[index]}
            />   
        ))
        
        //Shuffle the new array
        this.shuffleComponents(pics)
      
        return pics;
    }
    
    //Render Nav Bar and the image components array in the main row on the page. 
    render() {
        return(
        <div className="mainContainer">
            <NavBar
            iconimage="./assets/images/avengers.png"
            title="THE AVENGERS CLICK GAME"
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