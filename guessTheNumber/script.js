//previous guesses me ham jo bhi user guess karega usey array me save karte jaege aur fir use display karte jaege 
//guesses remaining ko bhi lower down karte jana haii 
//submit button is a click event
//also there is paragraph jo hame bataegea ki value low hai ya high haii

let randomNumber= console.log(parseInt(Math.random()*100+1)); //*10 taaki 1 hi number aa pae aur +1 kyuki kahi bar hame random variable 0 hi mil jata hai islie
const submit= document.querySelector('#subt');
const userInput= document.querySelector('#guessField'); 
const guessSlot= document.querySelector('.guesses');
const remaining= document.querySelector('.lastResult');
const lowOrHi= document.querySelector('.lowOrHi');
const startOver= document.querySelector('.resultParas');

const p= document.createElement('p');

let prevGuess= []; //array which stores previous values
let numGuess= 1;
let playGame= true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();

        // **********    guess variable     **********
        const guess= parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    //kya user ne valid number guess kara hai ya nai: "sirf validation"
    if(isNaN(guess)){
        alert('Please enter a valid number! 🤦‍♂️');
    }
    else if(guess < 1){
        alert('Please enter a number more than 1 🤦‍♂️');
    }
    else if(guess>100){
        alert('Please enter a number less than 100 🤦‍♂️')
    }
    else{
        prevGuess.push(guess);  //prevGuess array me push kardoo
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`GAME OVER , Random Number was ${randomNumber} 😃`)
            endGame()
        } 
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    //value correct hai, low hai, ya high haii ya correct guess hai
    if(guess === randomNumber){
        displayMessage(`You guessed it right`);
        endGame();
    }
    else if(guess < randomNumber){
        displayMessage(`Number is TOOOOO low`);
    }
    else if(guess > randomNumber){
        displayMessage(`Number is TOOOOO high `);
    }
}

function displayGuess(guess){
    //to display guess: update arrays, basically updation of values
    userInput.value= ''
    guessSlot.innerHTML += `${guess} , `
    numGuess++;
    remaining.innerHTML= `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML= `<h2>${message}</h2>`;
}

function endGame(){
    //clean everything
    userInput.value= '';
    userInput.setAttribute('disabled', '')  //so that user cannot enter any new value in this variable 
    
    //ab kyuki hamare saare, "guesses remaining" zero ho jaege to fir ham ek button import kar dege jo hoga new game taki ek naya game chalu ho jaee 
    p.classList.add('button')
    p.innerHTML= `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame= false;
    newGame();
}

function newGame(){
    const newGameButton= document.querySelector('#newGame'); //to use button we made above
    //after clicking on this h2 tag new game will be started 
    newGameButton.addEventListener('click', function(e){
        randomNumber= parseInt(Math.random()+100+1);
        prevGuess=[];
        numGuess= 1;
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame= true;
    })
}
