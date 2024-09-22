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
    //lblNumber.textContent = randomNumber;
}



function guessNumber(){
    const guess = inpGuess.value;
    if (guess < randomNumber){
        lblMessage.textContent = "Dit gæt er alt for lavt!"
        lblScore.value--;
    }
    else if (guess > randomNumber){
        lblMessage.textContent = "Dit gæt er alt for højt!"
        lblScore.value--;
    }
    else {
        lblMessage.textContent = "Dit gæt er korrekt!";

    }
}

function betweenOneAndTwenty(){
    if (inpGuess.value > 20){
        lblMessage.textContent = "Must not be higher than 20!";
    }
    else if(inpGuess.value < 1){
        lblMessage.textContent = "Must not be lower than 1!";
    }
}

//----------------------------------------------------------------------
pbAgain.addEventListener("click", randomNumberGenerator);
pbGuess.addEventListener("click", guessNumber);
pbGuess.addEventListener("click", betweenOneAndTwenty);


