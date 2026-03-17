// ROCK PAPER SCISSORS GAME

// Scores should be defined outside the game function so they persist across rounds
let pScores = 0;
let cScores = 0;

// References to DOM elements that will be updated
const playerScore = document.getElementById("pscores");
const computerScore = document.getElementById("cscores");

const game = (event) => {
    // The option clicked by the player
    const pchoice = event.target;

    // Computer choice options
    const options = ["Rock", "Paper", "Scissors"];
    const Cchoice = options[Math.floor(Math.random() * 3)];

    // Check win/lose/draw conditions
    if (pchoice.classList.contains("Scissors") && Cchoice === "Paper") {
        setWinnerState("You Win", "green", "./Images/Cartoon scissors character.webp", "./Images/Cartoon paper character.webp", "./Images/Cartoon scissors cutting paper.webp");
        pScores++;
    }
    else if (pchoice.classList.contains("Rock") && Cchoice === "Scissors") {
        setWinnerState("You Win", "green", "./Images/Cartoon rock character.webp", "./Images/Cartoon scissors character.webp", "./Images/Cartoon of rock crushing scissors.webp");
        pScores++;
    }
    else if (pchoice.classList.contains("Paper") && Cchoice === "Rock") {
        setWinnerState("You Win", "green", "./Images/Cartoon paper character.webp", "./Images/Cartoon rock character.webp", "./Images/Cartoon of paper covering rock.webp");
        pScores++;
    }
    else if (pchoice.classList.contains("Scissors") && Cchoice === "Scissors") {
        setWinnerState("You Drew", "yellow", "./Images/Cartoon scissors character.webp", "./Images/Cartoon scissors character.webp", null);
    }
    else if (pchoice.classList.contains("Rock") && Cchoice === "Rock") {
        setWinnerState("You Drew", "yellow", "./Images/Cartoon rock character.webp", "./Images/Cartoon rock character.webp", null);
    }
    else if (pchoice.classList.contains("Paper") && Cchoice === "Paper") {
        setWinnerState("You Drew", "yellow", "./Images/Cartoon paper character.webp", "./Images/Cartoon paper character.webp", null);
    }
    else if (pchoice.classList.contains("Scissors") && Cchoice === "Rock") {
        setWinnerState("You Lose", "red", "./Images/Cartoon scissors character.webp", "./Images/Cartoon rock character.webp", "./Images/Cartoon of rock crushing scissors.webp");
        cScores++;
    }
    else if (pchoice.classList.contains("Paper") && Cchoice === "Scissors") {
        setWinnerState("You Lose", "red", "./Images/Cartoon paper character.webp", "./Images/Cartoon scissors character.webp", "./Images/Cartoon of scissors cutting paper.webp");
        cScores++;
    }
    else if (pchoice.classList.contains("Rock") && Cchoice === "Paper") {
        setWinnerState("You Lose", "red", "./Images/Cartoon rock character.webp", "./Images/Cartoon paper character.webp", "./Images/Cartoon of paper covering rock.webp");
        cScores++;
    }

    // Update screen scores
    playerScore.textContent = pScores;
    computerScore.textContent = cScores;
}

// Helper function to update texts and images cleanly
const setWinnerState = (text, textColor, playerImagePath, computerImagePath, finalImagePath) => {
    const comment = document.getElementById("results-comment");
    if (comment) {
        comment.textContent = text;
        comment.style.color = textColor;
        comment.style.fontFamily = "Ubuntu";
        comment.style.fontSize = "30px";
    }

    updateImage("player-results", playerImagePath);
    updateImage("computer-results", computerImagePath);
    updateImage("final-results", finalImagePath);
}

// Helper to update the image in a container without deleting text elements like <p> inside
const updateImage = (elementId, imagePath) => {
    const container = document.getElementById(elementId);
    if (!container) return;

    // Find and remove any existing <img> tag
    const oldImg = container.querySelector("img");
    if (oldImg) {
        oldImg.remove();
    }

    // Add the new image if a path is provided
    if (imagePath) {
        const photo = document.createElement("img");
        photo.src = imagePath;
        photo.style.width = "120px";
        photo.style.height = "120px";
        photo.style.borderRadius = "50%";
        container.appendChild(photo);
    }
}

// Reset function
const reset = () => {
    pScores = 0;
    cScores = 0;
    playerScore.textContent = pScores;
    computerScore.textContent = cScores;
    comment.textContent = "";
    updateImage("player-results", null);
    updateImage("computer-results", null);
    updateImage("final-results", null);
}

// Home function
const home = () => {
    window.location.href = "Home.html";
}

// Rules function
const rules = () => {
    window.location.href = "Rules.html";
}

// High-score function
const High_score = () => {
    localStorage.setItem("pScores", pScores);
    // this means store the pScores in localStorage
    localStorage.setItem("cScores", cScores);
    // this means store the cScores in localStorage
    // we need to get the highscore from the localStorage
    const pHighscore = localStorage.getItem("pScores");
    const cHighscore = localStorage.getItem("cScores");
    // we need to display the highscore
    const display = document.getElementById("pHighscore");
    display.textContent = pHighscore;
    const display2 = document.getElementById("cHighscore");
    display2.textContent = cHighscore;

    const mydiv = document.getElementById("high-score");
    mydiv.style.display = "flex";
    mydiv.style.flexDirection = "column";
}