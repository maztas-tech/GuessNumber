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

let randomNumber = 0;




//METODER
//Generer random nummer
function randomNumberGenerator(){
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    lblNumber.textContent = randomNumber;
}
pbAgain.addEventListener("click", randomNumberGenerator);

function guessNumber(){
    const guess = inpGuess.value;
    if (guess == randomNumber){
        lblMessage.textContent = "du har vundet!";
    }
}

//----------------------------------------------------------------------
pbGuess.addEventListener("click", guessNumber);


