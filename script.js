//Game board module
const gameBoardModule = (function () {
    let gameBoard = [];
    return {};
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

//Created players
const playerOne = playerFactory("Paul", "X");
const playerTwo = playerFactory("Marilena", "O");
