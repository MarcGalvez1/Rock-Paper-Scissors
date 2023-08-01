ChangeGUI()

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

function ChangeGUI() {
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
    var imgUser = document.getElementById("winner")



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

    ComputerChoice();
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

function ComputerChoice() {
    var randomChoice = Math.floor(Math.random() * 3) + 1
    var imgLoser = document.getElementById('')
    switch(randomChoice) {
        case 1:
            ComputerChoiceOBJ = {...Rock};
            break;
        case 2:
            ComputerChoiceOBJ = {...Paper};
            break;
        case 3:
            ComputerChoiceOBJ = {...Scissors};
            break;
        default:
            console.log("Random choice has stopped working.");
    }
}