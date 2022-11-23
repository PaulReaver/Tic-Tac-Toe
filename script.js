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
    let running = true;
    return { gameBoard, winConditions, xTurn, running };
})();

//Display controller module
const displayControllerModule = (function () {

    //Create node list of cells
    const cells = document.querySelectorAll(".cell");

    //Get arrows
    const rightArrow = document.querySelector("#right-arrow");
    const leftArrow = document.querySelector("#left-arrow");

    //Get display message
    const message = document.querySelector(".message");

    //Place correct markers on board
    for (let i = 0; i < gameBoardModule.gameBoard.length; i++) {
        cells[i].addEventListener("click", () => {
            if (gameBoardModule.xTurn && gameBoardModule.running) {
                gameBoardModule.gameBoard[i] = "X";
                cells[i].textContent = "X";
                message.textContent = "player O's turn..."
            } else if (!gameBoardModule.xTurn && gameBoardModule.running) {
                gameBoardModule.gameBoard[i] = "O";
                cells[i].textContent = "O";
                message.textContent = "player X's turn..."
            }

            //Calls function to check if there is a winner
            if (gameBoardModule.running) {
                checkWinner(message);
            }
        }, { once: true })
    }
    return {};
})();

//function that checks if there is a winner
function checkWinner(message) {
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
        gameBoardModule.running = false;

        if (gameBoardModule.xTurn) {
            const playerOne = playerFactory(document.querySelector("#player-one").value);
            message.textContent = `the winner is ${playerOne.name}!`
        } else {
            const playerTwo = playerFactory(document.querySelector("#player-two").value);
            message.textContent = `the winner is ${playerTwo.name}!`
        }

    } else if (!gameBoardModule.gameBoard.includes("")) {
        message.textContent = `draw!`;
        gameBoardModule.running = false;
    } else {
        gameBoardModule.xTurn = !gameBoardModule.xTurn;
    }
}

//Factory function to create players
function playerFactory(name) {
    return { name }
}

