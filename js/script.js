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



//Globale variables:
let randomNumber = 0;
let highScore = 0;
const MAXIMUM_VALUE = 20;
const MINIMUM_VALUE = 1;


//METODER
//Generer random nummer

function randomNumberGenerator(){
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    lblNumber.textContent = randomNumber;
    lblScore.textContent = 20;
}

function betweenOneAndTwenty(){
    const guess = Number(inpGuess.value);
    if (guess > MAXIMUM_VALUE){
        lblMessage.textContent = "Must not be higher than 20!";
    }
    else if(guess < MINIMUM_VALUE){
        lblMessage.textContent = "Must not be lower than 1!";
    }
}



function guessNumber(){
    const guess = inpGuess.value;
    if (guess < randomNumber){
        lblMessage.textContent = "Dit gæt er alt for lavt!"
        document.body.style.backgroundColor = "#E57373";
        return guess;
    }
    else if (guess > randomNumber){
        lblMessage.textContent = "Dit gæt er alt for højt!"
        document.body.style.backgroundColor = "#E57373";
        return guess;
    }
    else {
        lblMessage.textContent = "Dit gæt er korrekt!";
        document.body.style.backgroundColor = "#81C784";
        return guess;
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
    highScore = Number(lblHighScore.textContent);
    if (currentScore > highScore){
        lblHighScore.textContent = currentScore;
    }
}



//----------------------------------------------------------------------
pbGuess.addEventListener("click", guessNumber);
pbGuess.addEventListener("click", decreaseScore);
pbGuess.addEventListener("click", betweenOneAndTwenty);
pbAgain.addEventListener("click", randomNumberGenerator);



