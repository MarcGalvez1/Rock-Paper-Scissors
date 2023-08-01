CallAllFunctions()

const Rock = {
    Weakness: "Paper",
    Strength: "Scissors",
    Draw:      "Rock"

};
const Paper = {
    Weakness: "Scissors",
    Strength: "Rock",
    Draw:      "Paper"
};
const Scissors = {
    Weakness: "Rock",
    Strength: "Paper",
    Draw:      "Scissors"
}
let userChoice;
let ComputerChoiceOBJ;

function CallAllFunctions() {
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
    document.getElementById("starting-page").classList.add('d-none');
    document.getElementById("versus-page").classList.remove('d-none');





    DisplayMove(choice);
    SelectWinner();
}

function SelectWinner() {
    winner = ""
    if (userChoice.Strength === ComputerChoiceOBJ.Weakness) {
        winner = "user";
    } else if (userChoice.Weakness === ComputerChoiceOBJ.Strength) {
        winner = "computer";
    }
    else {
        winner = "draw";
    }
}

function DisplayMove(choice) {
    var randomChoice = Math.floor(Math.random() * 3) + 1
    var imgUser = document.getElementById("user")
    var imgComputer = document.getElementById("computer")
    console.log(randomChoice);
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
}