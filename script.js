//Game board module
const gameBoardModule = (function () {
    let gameBoard = ["", "", "", "", "", "", "", "", ""];
    return { gameBoard };
})();

//Display controller module
const displayControllerModule = (function () {

    //Create node list of cells
    const cells = document.querySelectorAll(".cell");

    //Get the players' container
    const playerOneContainer = document.querySelector("#player-one-container");
    const playerTwoContainer = document.querySelector("#player-two-container");

    //Set first turn to be X's and change opacity of inactive player
    let xTurn = true;
    playerTwoContainer.style.opacity = "40%";

    //Place correct markers on board
    for (let i = 0; i < gameBoardModule.gameBoard.length; i++) {
        cells[i].addEventListener("click", () => {
            if (xTurn) {
                gameBoardModule.gameBoard[i] = "X";
                cells[i].textContent = "X";
                playerOneContainer.style.opacity = "40%";
                playerTwoContainer.style.opacity = "100%";
            } else {
                gameBoardModule.gameBoard[i] = "O";
                cells[i].textContent = "O";
                playerTwoContainer.style.opacity = "40%";
                playerOneContainer.style.opacity = "100%";
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

