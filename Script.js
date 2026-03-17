// ROCK PAPER SCISSORS GAME

const game = (event) =>{

    // the event.target is the element  that was clicked, it's choice that was clicked
    const pchoice = event.target;

    // fetches the content from the player-results div
    const playerChoice = document.getElementById("player-results");

    // fetches the content from the computer-results div
    const computerChoice = document.getElementById("computer-results");

    // fetches tthe content from the final-results div
    const finalResults = document.getElementById("final-results");

    // fetches the content from the player-score div
    const playerScore = document.getElementById("pscores");

    // player scores
    let pScores = 0;

    // fetches the content from the computer-score div
    const computerScore = document.getElementById("cscores");

    // results comment
    let comment = document.getElementById("results-comment");
    comment.textContent = "";

    // computer choice
    const options = ["Rock", "Paper", "Scissors"]
    const Cchoice = options[Math.floor(Math.random() * 3)];
    let cScores = 0;

    if(pchoice.classList.contains("Scissors") && Cchoice == "Paper"){

        comment = "You Win";

        // styles for the comment
        comment.style.color = "green";
        comment.style.fontFamily = "Ubuntu";
        comment.style.fontSize = "30px";

        // fills the player div with the right image
        playerChoice = imageChangerforPlayer("./Images/Cartoon scissors character.webp");
        computerChoice = imageChangerForComputer("./Images/Cartoon paper character.webp");

        // Shows the scores of the winner and the losser
        // Computer
        cScores;
        computerScore = cScores;

        // Player
        pScores = pScores + 1;
        playerScore = pScores;


        // Final results
        finalResults = imageChangerForFinalResults("./Images/Cartoon scissors cutting paper.webp");
        
    }
    else if(pchoice.classList.contains("Rock") && Cchoice == "Scissors"){

        comment = "You Win";    

        // styles for the comment
        comment.style.color = "Green";
        comment.style.fontFamily = "Ubuntu";
        comment.style.fontSize = "30px";

        // fills the player div with the right image
        playerChoice = imageChangerforPlayer("./Images/Cartoon rock character.webp");
        computerChoice = imageChangerForComputer("./Images/Cartoon scissors character.webp");

        // shows the scores for the winner and the losser
        // Computer
        cScores;
        computerScores = cScores;

        //Player
        pScores = pScores + 1;
        playerScore = pScores;


    }
    else if(pchoice.classList.contains("paper") && Cchoice == "Rock") {

        comment = "You Win";

        // styles for the comment
        comment.style.color = "green";
        comment.style.fontFamily = "Ubuntu";
        comment.style.fontSize = "30px";

        // fills the player div with the right image
        playerChoice = imageChangerforPlayer("./Images/Cartoon paper character.webp");
        computerChoice = imageChangerForComputer("./Images/Cartoon rock character.webp");

        // Shows the scores of the winner and the losser
        // Computer
        cScores;
        computerScore = cScores;

        // Player
        pScores = pScores + 1;
        playerScore = pScores;


        // Final results
        finalResults = imageChangerForFinalResults("./Images/Cartoon of paper covering rock.webp")
    }
    else if(pchoice.classList.contains("Scissors") && Cchoice == "Scissors"){
        
        comment = "You Drew";

        // styles for the comment
        comment.style.color = "yellow";
        comment.style.fontFamily = "Ubuntu";
        comment.style.fontSize = "30px";

        // fills the player div with the right image
        playerChoice = imageChangerforPlayer("./Images/Cartoon scissors character.webp");
        computerChoice = imageChangerForComputer("./Images/Cartoon scissors character.webp");

        // Shows the scores of the winner and the losser
        // Computer
        cScores;
        computerScore = cScores;

        // Player
        pScores;
        playerScore = pScores;


        // Final results
        finalResults.textContent = "DRAW";
    }
    else if(pchoice.classList.contains("Scissors") && Cchoice == "Scissors"){
        
        comment = "You Win";

        // styles for the comment
        comment.style.color = "green";
        comment.style.fontFamily = "Ubuntu";
        comment.style.fontSize = "30px";

        // fills the player div with the right image
        playerChoice = imageChangerforPlayer("./Images/Cartoon paper character.webp");
        computerChoice = imageChangerForComputer("./Images/Cartoon rock character.webp");

        // Shows the scores of the winner and the losser
        // Computer
        cScores;
        computerScore = cScores;

        // Player
        pScores;
        playerScore = pScores;


        // Final results
        finalResults = "DRAW";
    }
    else if(pchoice.classList.contains("Rock") && Cchoice == "Rock"){
        
        comment = "You Drew";

        // styles for the comment
        comment.style.color = "yellow";
        comment.style.fontFamily = "Ubuntu";
        comment.style.fontSize = "30px";

        // fills the player div with the right image
        playerChoice = imageChangerforPlayer("./Images/Cartoon rock character.webp");
        computerChoice = imageChangerForComputer("./Images/Cartoon rock character.webp");

        // Shows the scores of the winner and the losser
        // Computer
        cScores;
        computerScore = cScores;

        // Player
        pScores;
        playerScore = pScores;


        // Final results
        finalResults.textContent = "DRAW";
    }
    else if(pchoice.classList.contains("Paper") && Cchoice == "Paper"){
        
        comment = "You Drew";

        // styles for the comment
        comment.style.color = "yellow";
        comment.style.fontFamily = "Ubuntu";
        comment.style.fontSize = "30px";

        // fills the player div with the right image
        playerChoice = imageChangerforPlayer("./Images/Cartoon paper character.webp");
        computerChoice = imageChangerForComputer("./Images/Cartoon paper character.webp");

        // Shows the scores of the winner and the losser
        // Computer
        cScores;
        computerScore = cScores;

        // Player
        pScores;
        playerScore = pScores;


        // Final results
        finalResults.textContent = "DRAW"; 
    }
    else if(pchoice.classList.contains("Scissors") && Cchoice == "Rock") {
        
        comment = "You Lose";

        // styles for the comment
        comment.style.color = "red";
        comment.style.fontFamily = "Ubuntu";
        comment.style.fontSize = "30px";

        // fills the player div with the right image
        playerChoice = imageChangerforPlayer("./Images/Cartoon scissors character.webp");
        computerChoice = imageChangerForComputer("./Images/Cartoon rock character.webp");

        // Shows the scores of the winner and the losser
        // Computer
        cScores = cScores + 1;
        computerScore = cScores;

        // Player
        pScores;
        playerScore = pScores;


        // Final results
        finalResults = imageChangerForFinalResults("./Images/Cartoon of rock crushing scissors.webp")
    }
    else if(pchoice.classList.contains("Paper") && Cchoice == "Scissors") {
        
        comment = "You Lose";

        // styles for the comment
        comment.style.color = "red";
        comment.style.fontFamily = "Ubuntu";
        comment.style.fontSize = "30px";

        // fills the player div with the right image
        playerChoice = imageChangerforPlayer("./Images/Cartoon paper character.webp");
        computerChoice = imageChangerForComputer("./Images/Cartoon scissors character.webp");

        // Shows the scores of the winner and the losser
        // Computer
        cScores = cScores + 1;
        computerScore = cScores;

        // Player
        pScores;
        playerScore = pScores;


        // Final results
        finalResults = imageChangerForFinalResults("./Images/Cartoon of scissors cutting paper.webp")
    }
    else if(pchoice.classList.contains("Rock") && Cchoice == "Paper") {
        
        comment = "You Lose";

        // styles for the comment
        comment.style.color = "red";
        comment.style.fontFamily = "Ubuntu";
        comment.style.fontSize = "30px";

        // fills the player div with the right image
        playerChoice = imageChangerforPlayer("./Images/Cartoon rock character.webp");
        computerChoice = imageChangerForComputer("./Images/Cartoon paper character.webp");

        // Shows the scores of the winner and the losser
        // Computer
        cScores = cScores + 1;
        computerScore = cScores;

        // Player
        pScores;
        playerScore = pScores;


        // Final results
        finalResults = imageChangerForFinalResults("./Images/Cartoon of paper covering rock.webp")
    }
}

//  function to change the image for the player choice
const imageChangerforPlayer = (imagePath) =>{
    const choiceImage = document.getElementById("player-results");
    choiceImage.src = imagePath;
    const Photo = document.createElement("img");
    Photo.src = imagePath;
    Photo.width = "100";
    Photo.height = "100";
    choiceImage.appendChild(Photo);
}

// function to change the image for the computer choice
const imageChangerForComputer = (imagePath) => {
    const choiceimage = document.getElementById("computer-results");
    choiceimage.src = imagePath;
    const Photo = document.createElement("img");
    Photo.src = imagePath;
    Photo.width = "100";
    Photo.height = "100";
    choiceimage.appendChild(Photo);
}

// function to change the image for the final results
const imageChangerForFinalResults  = (imagePath) => {
    const final = document.getElementById("final-results");
    final.src = imagePath;
    const Photo = document.createElement("img");
    Photo.src = imagePath;
    Photo.width = '100';
    Photo.height = '100';
    final.appendChild(Photo); 
}