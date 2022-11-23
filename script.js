//Game board module
const gameBoardModule = (function () {
    let gameBoard = ["", "", "", "", "", "", "", "", ""];
    return { gameBoard };
})();

//Display controller module
const displayControllerModule = (function () {

    //Create node list of cells
    const cells = document.querySelectorAll(".cell");

    //Get arrows
    const rightArrow = document.querySelector("#right-arrow");
    const leftArrow = document.querySelector("#left-arrow");

    //Set first turn to be X's and make inactive player's arrow invisible
    let xTurn = true;
    leftArrow.style.opacity = "0";
    

    //Place correct markers on board
    for (let i = 0; i < gameBoardModule.gameBoard.length; i++) {
        cells[i].addEventListener("click", () => {
            if (xTurn) {
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
            xTurn = !xTurn;
        }, { once: true })
    }
    return {};
})();

//Factory function to create players
function playerFactory(name) {
    return { name }
}

