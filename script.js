//Game board module
const gameBoardModule = (function () {
    let gameBoard = ["", "", "", "", "", "", "", "", ""];
    return { gameBoard };
})();

//Display controller module
const displayControllerModule = (function () {

    //Create node list of cells
    const cells = document.querySelectorAll(".cell");

    //Set first turn to be X's
    let xTurn = true;

    //Place correct markers on board
    for (let i = 0; i < gameBoardModule.gameBoard.length; i++) {
        cells[i].addEventListener("click", () => {
            if (xTurn) {
                gameBoardModule.gameBoard[i] = "X";
                cells[i].textContent = "X";
            } else {
                gameBoardModule.gameBoard[i] = "O";
                cells[i].textContent = "O";
            }
            xTurn = !xTurn;
        }, { once: true })
    }
    return {};
})();

//Factory function to create players
function playerFactory(name) {
    return { name }
}

