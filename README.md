# The Avengers Memory Game
## A memory game built with React.js.

### How to play: 
To play, follow the link below to the deployed version of this app. 
https://clickmememorygame.herokuapp.com/

#### Game Instructions: 
1. Click on an Avenger image. After your click, the Avenger images will reorganize on the page in a different order. Now it is up to you to click on a different Avenger each time, never re-clicking one that you have previously clicked! 


2. As you click a new Avenger each time, your score will go up.

3. If you re-click an Avenger, your score will go down to zero, but if it was the highest score you received so far, it will be saved as a 'Top Score'. Try to get the highest Top Score possible: 12!

### Highlights: 
*The Avengers Memory Game is built with React.js with a clean and attractive front-end design. 

*The game utilizes React features such as components, state, props, and lifecycles to effectively implement the game logic. 

*The shuffleComponents() method: 
```
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

```

*This application is mobile responsive! 