//Game board module
const gameBoardModule = (function () {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    let gameBoard = ["", "", "", "", "", "", "", "", ""];
    let xTurn = true;
    return { gameBoard, winConditions, xTurn };
})();

//Display controller module
const displayControllerModule = (function () {

    //Create node list of cells
    const cells = document.querySelectorAll(".cell");

    //Get arrows
    const rightArrow = document.querySelector("#right-arrow");
    const leftArrow = document.querySelector("#left-arrow");

    //Set first turn to be X's and make inactive player's arrow invisible
    leftArrow.style.opacity = "0";



    //Place correct markers on board
    for (let i = 0; i < gameBoardModule.gameBoard.length; i++) {
        cells[i].addEventListener("click", () => {


            if (gameBoardModule.xTurn) {
                gameBoardModule.gameBoard[i] = "X";
                cells[i].textContent = "X";
                leftArrow.style.opacity = "1";
                rightArrow.style.opacity = "0";
            } else {
                gameBoardModule.gameBoard[i] = "O";
                cells[i].textContent = "O";
                leftArrow.style.opacity = "0";
                rightArrow.style.opacity = "1";
            }


            //Calls function to check if there is a winner
            checkWinner();
        }, { once: true })
    }
    return {};
})();

//function that checks if there is a winner
function checkWinner() {
    let roundWon = false;

    for (let i = 0; i < gameBoardModule.winConditions.length; i++) {
        const condition = gameBoardModule.winConditions[i];
        const cellA = gameBoardModule.gameBoard[condition[0]];
        const cellB = gameBoardModule.gameBoard[condition[1]];
        const cellC = gameBoardModule.gameBoard[condition[2]];

        if (cellA == "" || cellB == "" || cellC == "") {
            continue;
        }

        if (cellA == cellB && cellB == cellC) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        console.log("round won");

    } else if (!gameBoardModule.gameBoard.includes("")) {
        console.log("draw")

    } else {
        gameBoardModule.xTurn = !gameBoardModule.xTurn;
    }
}

//Factory function to create players
function playerFactory(name) {
    return { name }
}

