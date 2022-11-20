//Game board module
const gameBoardModule = (function () {
    let gameBoard = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
    return { gameBoard };
})();

//Display controller module
const displayControllerModule = (function () {
    let displayController = [];
    return {};
})();

//Factory function to create players
function playerFactory(name, sign) {
    return { name, sign }
}

//Module to display signs to screen
const signsToScreen = (function () {
    const cells = document.querySelectorAll(".cell");
    for (let i = 0; i < 9; i++) {
        cells[i].textContent = gameBoardModule.gameBoard[i];
    }
    return {};
})

//Created players
const playerOne = playerFactory("Paul", "X");
const playerTwo = playerFactory("Marilena", "O");

//Populate screen with signs
signsToScreen();
