// This Javascript file is used to program the logic of the web page.

// These variables are used to accumulate the users score and to store the id of the buttons in this program.
var userScore = 0;
const btnRock = document.getElementById("Rock");
const btnPaper = document.getElementById("Paper");
const btnScissors = document.getElementById("Scissors");
const btnRetry = document.getElementById("Try-Again");

// These are used to make the buttons have an onclick function.
btnRock.addEventListener("click", function() {
    ChangeDisplay(1);
});
btnPaper.addEventListener("click", function() {
   ChangeDisplay(2);
});
btnScissors.addEventListener("click",  function() {
   ChangeDisplay(3);
});
btnRetry.addEventListener("click", function(){
    StartingPage();
}) 


// The starting page is not automatically called on load and instead is in a function so, that transitionining from page to page would be easier.
StartingPage();

// The rock paper scissors objects stores their strengths and weaknesses to later compare in the SelectWinner() function.
const Rock = {
    Name: "Rock",
    Weakness: "Paper",
    Strength: "Scissors",
    Draw:      "Rock"

};
const Paper = {
    Name: "Paper",
    Weakness: "Scissors",
    Strength: "Rock",
    Draw:      "Paper"
};
const Scissors = {
    Name: "Scissors",
    Weakness: "Rock",
    Strength: "Paper",
    Draw:      "Scissors"
}
// These 2 objects are made to store the choicees that the user and computer makes.
let userChoice;
let ComputerChoiceOBJ;


function StartingPage() {
    // The starting page displays the 3 choices, and removes the elements of the versus page.
    document.getElementById("starting").classList.remove('d-none');
    document.getElementById("versus-page").classList.add('d-none');
    document.getElementById("winner").classList.add('d-none');
    document.getElementById("retry").classList.add('d-none');
}


function ChangeDisplay(choice) {
    // This changes the display to the verus page and displays the images of the choices chosen by the computer and player.
    CallVersusPage();

    // This makes a random choice from 1-3 to assign rock, paper, or scissors to the computer choice. 
    var randomChoice = Math.floor(Math.random() * 3) + 1;
    var imgUser = document.getElementById("user");
    var imgComputer = document.getElementById("computer");
    // This variable is used to display the winner.
    var winnerDisplay = "";

    // This selects an image to display depending on the users choice
    switch(choice) {
        case 1:
            imgUser.src = 'img/rock.png'
            userChoice = {...Rock};
            break;
        case 2:
            imgUser.src = 'img/paper.png'
            userChoice = {...Paper};
            break;
        case 3:
            imgUser.src = "img/scissors.png"
            userChoice = {...Scissors};
            break;
        default:
            console.log("Buttons have stopped working.");
    }


    // This displays an image depending on the computers choice.
    switch(randomChoice) {
        case 1:
            imgComputer.src = 'img/rock.png'
            ComputerChoiceOBJ = {...Rock};
            break;
        case 2:
            imgComputer.src = 'img/paper.png'
            ComputerChoiceOBJ = {...Paper};
            break;
        case 3:
            imgComputer.src = 'img/scissors.png'
            ComputerChoiceOBJ = {...Scissors};
            break;
        default:
            console.log("Random choice has stopped working.");
    }

    // This displays the winner.
    winner = SelectWinner();
    winnerDisplay += '<h1 class="text-center text-light mt-5">';
    switch(winner) {
        case "user":
            winnerDisplay += 'Amazing you win!';

            break;
        case "computer":
            winnerDisplay += "You lost, Try again!";
            break;
        case "draw":
            winnerDisplay += "It's a draw, Try again!";
            break;
        default:
            window.alert("The application has failed!");
    }
    winnerDisplay += '</h1>';
    document.getElementById('winner').innerHTML = winnerDisplay;

}

function CallVersusPage() {
    // This function is used to hide the starting page and display the versus page.
    document.getElementById("starting").classList.add('d-none')
    document.getElementById("versus-page").classList.remove('d-none');
    document.getElementById("winner").classList.remove('d-none');
    document.getElementById("retry").classList.remove('d-none');
}

function SelectWinner() {
    var winner = "";

    if (userChoice.Strength === ComputerChoiceOBJ.Name) {
        // User wins
        winner = "user";
        console.log("win");
        userScore += 1; // Increment userScore
        document.getElementById('score').innerHTML = userScore; // Update user score on the UI
        console.log(userScore);
    } else if (userChoice.Weakness === ComputerChoiceOBJ.Name) {
        // Computer wins
        winner = "computer";
        console.log("lose")
    } else if (userChoice.Draw === ComputerChoiceOBJ.Name) {
        // It's a draw
        winner = "draw";
    } else {
        console.log("Error")
    }

    return winner;
}





