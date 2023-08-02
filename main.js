CallButtons()

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
let userChoice;
let ComputerChoiceOBJ;

function CallButtons() {
    //Changes the GUI to display the vs mode.

    const btnRock = document.getElementById("Rock");
    const btnPaper = document.getElementById("Paper");
    const btnScissors = document.getElementById("Scissors")
    btnRock.addEventListener("click", function() {
        ChangeDisplay(1);
    });
    btnPaper.addEventListener("click", function() {
       ChangeDisplay(2);
    });
    btnScissors.addEventListener("click",  function() {
       ChangeDisplay(3);
    });

    
}
function ChangeDisplay(choice) {
    document.getElementById("starting").classList.add('d-none');
    document.getElementById("versus-page").classList.remove('d-none');
    document.getElementById("winner").classList.remove('d-none');

    var randomChoice = Math.floor(Math.random() * 3) + 1;
    var imgUser = document.getElementById("user");
    var imgComputer = document.getElementById("computer");

    var winnerDisplay = "";
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

function SelectWinner() {
    var winner = ""
    if (userChoice.Strength === ComputerChoiceOBJ.Name) {
        winner = "user";
        console.log("1st");
    }
    else if (userChoice.Weakness === ComputerChoiceOBJ.Name) {
        winner = "computer";
        console.log("2nd")
    }
    else if (userChoice.Draw  === ComputerChoiceOBJ.Name)  {
        winner = "draw";
    }
    else {
        console.log("Error")
    }

    
    return winner;
}



