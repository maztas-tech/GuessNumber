console.log("Jeg er guess number!");
//lbl står for label

const lblMessage = document.querySelector(".message");
console.log(lblMessage);
console.log(lblMessage.textContent);

const lblNumber = document.querySelector(".number");
console.log(lblNumber);

const lblScore = document.querySelector(".score");
console.log(lblScore);

const inpGuess = document.querySelector(".guess");

const pbAgain = document.querySelector(".again");

const pbGuess = document.querySelector(".check");

const lblHighScore = document.querySelector(".highscore");






//METODER
//Generer random nummer
let randomNumber = 0;
let highScore = 0;


function randomNumberGenerator(){
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    lblNumber.textContent = randomNumber;
    lblScore.textContent = 20;
}



function guessNumber(){
    const guess = inpGuess.value;
    if (guess < randomNumber){
        lblMessage.textContent = "Dit gæt er alt for lavt!"
        return guess;
    }
    else if (guess > randomNumber){
        lblMessage.textContent = "Dit gæt er alt for højt!"
        return guess;
    }
    else {
        lblMessage.textContent = "Dit gæt er korrekt!";
        return guess;
    }
}

const MAXIMUM_VALUE = 20;
const MINIMUM_VALUE = 1;

function betweenOneAndTwenty(){
    if (inpGuess.value > MAXIMUM_VALUE){
        lblMessage.textContent = "Must not be higher than 20!";
    }
    else if(inpGuess.value <= MINIMUM_VALUE){
        lblMessage.textContent = "Must not be lower than 1!";
    }
}

function decreaseScore(){
    let currentScore = Number(lblScore.textContent);
    let guessedNumber = guessNumber();
    if (guessedNumber < randomNumber) {
        lblScore.textContent = currentScore - 1;
    } else if (guessedNumber > randomNumber) {
        lblScore.textContent = currentScore - 1;
    } else {
        updateHighScore(currentScore);
    }
}

function updateHighScore(currentScore) {
    lblHighScore.textContent = currentScore;
    highScore = currentScore;
}



//----------------------------------------------------------------------
pbAgain.addEventListener("click", randomNumberGenerator);
pbGuess.addEventListener("click", guessNumber);
pbGuess.addEventListener("click", betweenOneAndTwenty);
pbGuess.addEventListener("click", decreaseScore)


